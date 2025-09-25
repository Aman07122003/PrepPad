import express from "express";
import { googleLogin } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/auth/google
router.post("/google", googleLogin);

router.get("/me", verifyJWT, (req, res) => {
    res.json({ user: req.user });
  });
  

export default router;
