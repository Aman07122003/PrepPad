import express from "express";
import { getData, getContent } from "../controllers/menu.controller.js";
const router = express.Router();


router.get("/:section", getData);
router.get("/:section/:chapter/:topic", getContent);

export default router;
