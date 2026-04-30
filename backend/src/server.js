import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import codeRoutes from "./routes/codeRoutes.js";
import assistantRoutes from "./routes/assistantRoutes.js";

const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ 
  origin: ENV.CLIENT_URL, 
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"] // 👈 THIS IS THE MISSING KEY
}));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/assistant", assistantRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  // On Render, the process typically runs from the repo root.
  // `frontend/dist` will exist after `npm run build --prefix frontend`.
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // SPA fallback
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port:", ENV.PORT);
      console.log("Code execution (Piston) URL:", `${ENV.PISTON_API_URL}/execute`);
    });
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();
