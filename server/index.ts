import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleSignup,
  handleLogin,
  handleVerifyOTP,
  handleGetCurrentUser,
  handleLogout,
  handleResendOTP
} from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Authentication endpoints
  app.post("/api/auth/signup", handleSignup);
  app.post("/api/auth/login", handleLogin);
  app.post("/api/auth/verify-otp", handleVerifyOTP);
  app.post("/api/auth/resend-otp", handleResendOTP);
  app.get("/api/auth/me", handleGetCurrentUser);
  app.post("/api/auth/logout", handleLogout);

  return app;
}
