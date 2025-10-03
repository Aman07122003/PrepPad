// models/Reasoning.js
import mongoose from "mongoose";

const FlexibleAptitudeSchema = new mongoose.Schema({
  section: { type: String, required: true },
  description: { type: String, required: true },
  content: [{
    id: { type: String },
    title: { type: String, required: true },
    topics: [mongoose.Schema.Types.Mixed] // Accepts both strings and objects
  }]
});

export default mongoose.model("Menu", FlexibleAptitudeSchema);