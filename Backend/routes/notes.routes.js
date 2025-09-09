import express from "express";
import path from "path";
import Note from "../models/notes.model.js";
import {
    createNote, 
    getAllNotes, 
    deleteNote, 
    getDSAContent,
} from "../controllers/notes.controller.js";
import { uploadPDF } from "../middleware/multer.middleware.js";


const router = express.Router();

router.post("/", uploadPDF.single("pdfFile"), createNote);
router.get("/", getAllNotes);
router.get("/:id/file", async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note || !note.pdfFile) return res.status(404).send("File not found");
  
      // Extract filename from URL
      const fileName = note.pdfFile.split("/files/")[1];
      const filePath = path.join(process.cwd(), "Files", fileName);
  
      res.download(filePath); // download PDF
    } catch (error) {
      console.error("Error fetching PDF:", error);
      res.status(500).send("Internal Server Error");
    }
});
router.delete("/:id", deleteNote);
router.post("/dsa", getDSAContent);  
export default router;