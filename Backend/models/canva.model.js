import mongoose from 'mongoose';

const CanvasImageSchema = new mongoose.Schema({
  noteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },
  image: {
    type: String, // base64 encoded image
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('CanvasImage', CanvasImageSchema);
