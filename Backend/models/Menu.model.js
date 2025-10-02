// models/Reasoning.js
import mongoose from "mongoose";

const topicsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  topics: [{ type: String }]
});

const AptitudeSchema = new mongoose.Schema({
  section: { type: String, required: true },
  description: { type: String, required: true },
  content: [ topicsSchema ],
});

export default mongoose.model("Menu", AptitudeSchema);
