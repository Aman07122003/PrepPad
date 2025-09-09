import express from 'express';
import { saveCanvasImage, loadCanvasImage } from "../controllers/canva.controller.js";

const router = express.Router();

router.post('/:id', saveCanvasImage); // Save image
router.get('/:id', loadCanvasImage);  // Load image

export default router;
