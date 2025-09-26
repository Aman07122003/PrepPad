import express from "express";
import { googleLogin, getMe, getCurrentUser } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/auth/google
router.post("/google", googleLogin);

router.get("/getCurrentUser", verifyJWT, getCurrentUser);

export default router;
