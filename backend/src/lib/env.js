import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  /** Self-hosted Piston base (no trailing slash). Example: http://127.0.0.1:2000/api/v2 */
  PISTON_API_URL:
    process.env.PISTON_API_URL?.replace(/\/$/, "") ||
    "http://127.0.0.1:2000/api/v2",
  PISTON_API_KEY: process.env.PISTON_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-2.0-flash",
  /**
   * When Piston is unreachable, run code on the server (Node / python / javac).
   * - `true` / `1` → always allow fallback when Piston fails
   * - `false` / `0` → never
   * - unset → allow in non-production only (local dev without Docker)
   */
  PISTON_FALLBACK:
    process.env.PISTON_FALLBACK === "true" || process.env.PISTON_FALLBACK === "1"
      ? true
      : process.env.PISTON_FALLBACK === "false" || process.env.PISTON_FALLBACK === "0"
        ? false
        : process.env.NODE_ENV !== "production",
};
