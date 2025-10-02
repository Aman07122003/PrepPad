import express from "express";
import { getData } from "../controllers/menu.controller.js";
const router = express.Router();


router.get("/:section", getData);

export default router;
