import { mkdtempSync, writeFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { spawnSync } from "child_process";

const TIMEOUT_MS = 15_000;
const MAX_BUFFER = 1024 * 1024;

/**
 * Runs user code on the host machine (dev fallback when Piston is down).
 * Do NOT enable in untrusted production environments.
 */
export function executeLocally(language, files) {
  const code = files[0]?.content ?? "";
  if (!code.trim()) {
    return pistonShape(language, "", "No code to run", 1);
  }

  const workDir = mkdtempSync(join(tmpdir(), "piston-fb-"));

  try {
    if (language === "javascript") {
      return runJavaScript(workDir, code);
    }
    if (language === "python") {
      return runPython(workDir, code);
    }
    if (language === "java") {
      return runJava(workDir, code);
    }
    return pistonShape(language, "", `Local fallback does not support language: ${language}`, 1);
  } finally {
    try {
      rmSync(workDir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  }
}

function pistonShape(language, stdout, stderr, exitCode) {
  const out = stdout || "";
  const err = stderr || "";
  const combined = out + (out && err ? "\n" : "") + err;
  return {
    language,
    version: "local-fallback",
    run: {
      stdout: out,
      stderr: err,
      code: exitCode,
      signal: null,
      output: combined || (exitCode === 0 ? "" : err || "Execution failed"),
    },
  };
}

function runJavaScript(workDir, code) {
  const file = join(workDir, "main.js");
  writeFileSync(file, code, "utf8");
  const r = spawnSync(process.execPath, [file], {
    cwd: workDir,
    encoding: "utf8",
    timeout: TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
  });
  if (r.error) {
    return pistonShape("javascript", "", r.error.message, 1);
  }
  const stderr = (r.stderr || "").trim();
  const stdout = (r.stdout || "").trim();
  const codeExit = r.status ?? (r.signal ? 1 : 0);
  return pistonShape("javascript", stdout, stderr, codeExit);
}

function resolvePythonCmd() {
  for (const cmd of ["python3", "python", "py"]) {
    const r = spawnSync(cmd, ["-c", "print(1)"], {
      encoding: "utf8",
      timeout: 5000,
    });
    if (!r.error && r.status === 0) return cmd;
  }
  return null;
}

function runPython(workDir, code) {
  const py = resolvePythonCmd();
  if (!py) {
    return pistonShape(
      "python",
      "",
      "Python not found in PATH. Install Python 3 or use Docker Piston.",
      1
    );
  }
  const file = join(workDir, "main.py");
  writeFileSync(file, code, "utf8");
  const r = spawnSync(py, [file], {
    cwd: workDir,
    encoding: "utf8",
    timeout: TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
  });
  if (r.error) {
    return pistonShape("python", "", r.error.message, 1);
  }
  const stderr = (r.stderr || "").trim();
  const stdout = (r.stdout || "").trim();
  const codeExit = r.status ?? (r.signal ? 1 : 0);
  return pistonShape("python", stdout, stderr, codeExit);
}

function runJava(workDir, code) {
  const match = code.match(/public\s+class\s+(\w+)/) || code.match(/^\s*class\s+(\w+)/m);
  const className = match ? match[1] : "Main";
  const file = join(workDir, `${className}.java`);
  writeFileSync(file, code, "utf8");

  const jc = spawnSync("javac", [file], {
    cwd: workDir,
    encoding: "utf8",
    timeout: TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
  });
  if (jc.error) {
    return pistonShape(
      "java",
      "",
      jc.error.message.includes("ENOENT")
        ? "javac not found. Install JDK or use Docker Piston."
        : jc.error.message,
      1
    );
  }
  if (jc.status !== 0) {
    return pistonShape("java", "", (jc.stderr || jc.stdout || "").trim() || "Compilation failed", 1);
  }

  const jr = spawnSync("java", ["-cp", workDir, className], {
    cwd: workDir,
    encoding: "utf8",
    timeout: TIMEOUT_MS,
    maxBuffer: MAX_BUFFER,
  });
  if (jr.error) {
    return pistonShape("java", "", jr.error.message, 1);
  }
  const stderr = (jr.stderr || "").trim();
  const stdout = (jr.stdout || "").trim();
  const codeExit = jr.status ?? (jr.signal ? 1 : 0);
  return pistonShape("java", stdout, stderr, codeExit);
}
