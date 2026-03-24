import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import { authMiddleware } from "../modules/auth/auth.middleware";

const router = Router();

router.use("/auth", authRoutes);

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.get("/private", authMiddleware, (req, res) => {
  res.json({ message: "ok" });
});
export default router;