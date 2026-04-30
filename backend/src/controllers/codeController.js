import { ENV } from "../lib/env.js";
import { executeLocally } from "../lib/localExecute.js";

export async function executeCode(req, res) {
  try {
    const { language, version, files, stdin, args } = req.body || {};

    if (!language || !version || !Array.isArray(files) || files.length === 0) {
      return res.status(400).json({
        message: "language, version, and files[] are required",
      });
    }

    const baseUrl = ENV.PISTON_API_URL;
    const apiKey = ENV.PISTON_API_KEY;

    // Public emkc Piston is whitelist-only — never use it as default.
    if (baseUrl.includes("emkc.org")) {
      console.error(
        "[code/execute] PISTON_API_URL points at emkc.org (no longer public). Set PISTON_API_URL to self-hosted Piston, e.g. http://127.0.0.1:2000/api/v2"
      );
    }

    const executeUrl = `${baseUrl}/execute`;

    let upstream;
    try {
      upstream = await fetch(executeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: apiKey } : {}),
        },
        body: JSON.stringify({
          language,
          version,
          files,
          stdin: stdin || "",
          args: Array.isArray(args) ? args : [],
        }),
      });
    } catch (fetchErr) {
      console.error("[code/execute] Failed to reach Piston at", executeUrl, fetchErr);
      if (ENV.PISTON_FALLBACK) {
        console.warn("[code/execute] Using local code runner (PISTON_FALLBACK). Install Docker+Piston for isolated execution.");
        return res.status(200).json(executeLocally(language, files));
      }
      return res.status(503).json({
        message:
          "Cannot reach Piston. Start it locally (Docker) and set PISTON_API_URL in backend/.env — or set PISTON_FALLBACK=true for local dev (see README).",
        details: fetchErr.message,
        pistonUrl: executeUrl,
      });
    }

    const text = await upstream.text();
    const contentType = upstream.headers.get("content-type") || "";

    if (!upstream.ok) {
      const parsed = contentType.includes("application/json")
        ? safeJsonParse(text) ?? text
        : text;

      const whitelist =
        typeof parsed === "object" &&
        parsed?.message &&
        String(parsed.message).includes("whitelist");

      const useLocal =
        ENV.PISTON_FALLBACK &&
        (upstream.status === 401 ||
          upstream.status === 503 ||
          whitelist ||
          (typeof parsed === "string" && parsed.includes("whitelist")));

      if (useLocal) {
        console.warn("[code/execute] Piston rejected request; using local fallback.");
        return res.status(200).json(executeLocally(language, files));
      }

      if (upstream.status === 401 || whitelist) {
        return res.status(503).json({
          message:
            "Code runner unavailable: public Piston is whitelist-only. Run self-hosted Piston (Docker), set PISTON_API_URL=http://127.0.0.1:2000/api/v2 in backend/.env, restart backend — or set PISTON_FALLBACK=true for local dev.",
          upstream: parsed,
        });
      }

      return res.status(upstream.status).json({
        message: `Code execution failed with status ${upstream.status}`,
        upstream: parsed,
      });
    }

    if (contentType.includes("application/json")) {
      return res.status(200).json(JSON.parse(text));
    }

    return res.status(200).send(text);
  } catch (error) {
    console.error("Error in executeCode controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
