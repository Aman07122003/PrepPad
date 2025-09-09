import CanvasImage from "../models/canva.model.js";
import Note from "../models/notes.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { APIResponse } from "../utils/APIResponse.js";
import mongoose from "mongoose";
import { APIError } from "../utils/APIError.js";

// Save canvas image
export const saveCanvasImage = asyncHandler(async (req, res) => {
  const { id } = req.params;  // note id from params
  let { image } = req.body;

  if (!image) {
    throw new APIError(400, "Image data is required");
  }

  if (typeof image === 'object' && image.image) {
    image = image.image;
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new APIError(400, "Invalid noteId: " + id);
  }

  const note = await Note.findById(id);
  if (!note) {
    throw new APIError(404, "Note not found");
  }

  const newCanvasImage = new CanvasImage({
    noteId: note._id,  // ✅ use noteId instead of id
    image: image
  });

  await newCanvasImage.save();

  res.status(201).json(new APIResponse(true, "Canvas image saved successfully", newCanvasImage));
});

// Load canvas image
export const loadCanvasImage = asyncHandler(async (req, res) => {
  const { id } = req.params; // id refers to the noteId

  const canvasImage = await CanvasImage.findOne({ noteId: id }).sort({ createdAt: -1 });

  if (!canvasImage) {
    return res.status(404).json({ error: 'Canvas image not found' });
  }

  res.status(200).json(new APIResponse(true, 'Canvas image loaded successfully', canvasImage));
});
