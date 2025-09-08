import Note from "../models/notes.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import dsaData from "../data/Graph/dsa.data.js";

const createNote = async (req, res) => {
    try {
      let bodyData = req.body;
  
      // Agar data JSON string ke form me aaya hai (FormData se)
      if (bodyData.data) {
        bodyData = JSON.parse(bodyData.data);
      }
  
      const { question, category } = bodyData;
  
      if (!question || !category) {
        throw new APIError(400, "Question and Category are required");
      }
  
      // Agar file upload hua hai
      let pdfUrl = null;
      if (req.file) {
        // Construct public URL for the PDF
        pdfUrl = `${req.protocol}://${req.get("host")}/files/${req.file.filename}`;
      }
  
      // MongoDB me save karo
      const note = await Note.create({
        ...bodyData,
        pdfFile: pdfUrl, // store the public URL
      });
  
      res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: note,
      });
    } catch (error) {
      console.error("Error creating note:", error);
      res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Failed to create note",
      });
    }
};

const getDSAContent = async (req, res) => {
    try {
        const data = dsaData; // The dataset provided
        const { Section, Subsection, Topic } = req.body;

        // Validate input
        if (!Section && !Subsection && !Topic) {
            return res.status(400).json(new APIError(400, "At least one of Section, Subsection, or Topic is required"));
        }

        // Check if Section matches
        if (Section && data.Section.toLowerCase() !== Section.toLowerCase()) {
            return res.status(404).json(new APIError(404, "Section not found"));
        }

        // Find the subsection
        let subsectionData = null;
        if (Subsection) {
            subsectionData = data.content.find(sub => sub.Subsection.toLowerCase() === Subsection.toLowerCase());
        } else {
            subsectionData = data.content[0]; // Default to first subsection if none provided
        }

        if (!subsectionData) {
            return res.status(404).json(new APIError(404, "Subsection not found"));
        }

        // Find the topic
        let topicData = null;
        if (Topic) {
            topicData = subsectionData.content.find(topic => topic.Topic.toLowerCase() === Topic.toLowerCase());
        } else {
            topicData = subsectionData.content[0]; // Default to first topic if none provided
        }

        if (!topicData) {
            return res.status(404).json(new APIError(404, "Topic not found in the specified subsection"));
        }

        // Return the found topic content
        return res.status(200).json(
            new APIResponse(200, topicData, "Topic content fetched successfully")
        );

    } catch (error) {
        return res.status(500).json(
            new APIError(500, "Failed to fetch topic content", error.message)
        );
    }
};

const deleteNote = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedNote = await Note.findByIdAndDelete(id);
  
      if (!deletedNote) {
        throw new APIError(404, "Note not found");
      }
  
      return res
        .status(200)
        .json(new APIResponse(200, "Note deleted successfully", deletedNote));
    } catch (error) {
      console.error("Error deleting note:", error);
      throw new APIError(500, "Failed to delete note");
    }
});

const getAllNotes = asyncHandler(async (req, res) => {
    try {
        const {
        page = 1,
        limit = 100,
        category,
        subCategory,
        tags,
        difficulty,
        noteType,
        search,
        sort = "desc", // latest first by default
        } = req.query;
    
        // Build filter object
        const filter = {};
    
        if (category) filter.category = category;
        if (subCategory) filter.subCategory = subCategory;
        if (difficulty) filter.difficulty = difficulty;
        if (noteType) filter.noteType = { $in: [noteType] };
        if (tags) filter.tags = { $in: tags.split(",") };
    
        if (search) {
        filter["question.heading"] = { $regex: search, $options: "i" };
        }
    
        // Pagination
        const skip = (Number(page) - 1) * Number(limit);
    
        // Fetch notes
        const notes = await Note.find(filter)
        .sort({ createdAt: sort === "asc" ? 1 : -1 })
        .skip(skip)
        .limit(Number(limit));
    
        const total = await Note.countDocuments(filter);
    
        return res.status(200).json(
        new APIResponse(200, "Notes fetched successfully", {
            notes,
            pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / Number(limit)),
            },
        })
        );
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw new APIError(500, "Failed to fetch notes");
    }
});

export { createNote, getAllNotes, deleteNote, getDSAContent };