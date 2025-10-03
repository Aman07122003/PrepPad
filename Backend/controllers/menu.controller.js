// controllers/reasoningController.js
import Menu from "../models/Menu.model.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";

// Find by section, topic title, and subtopic
export const getData = async (req, res) => {
  try {
    const { section } = req.params;

    const menu = await Menu.findOne({
      section: new RegExp(section, "i"),
    });

    if (!menu) {
        throw new APIError(404, "Section not found");
    }

    return res
    .status(200)
    .json(new APIResponse(200, menu, "Aptitude data fetched successfully"));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new APIError(500, "Failed to fetch aptitude data", error.message));
  }
};

export const getContent = async (req, res) => {
  try {
    const { section, chapter, topic } = req.params;

    // Find the section
    const sectionData = await Menu.findOne({ section: section });

    if (!sectionData) {
      return res.status(404).json({ message: "Section not found" });
    }

    // Find the subsection (content item)
    const subsectionData = sectionData.content.find((sub) => sub.title === chapter );

    if (!subsectionData) {
      return res.status(404).json({ message: "Subsection not found" });
    }

    // Find the topic
    const topicData = subsectionData.topics.find((t) => t.Title === topic);

    if (!topicData) {
      return res.status(404).json({ message: "Topic not found" });
    }

    // ✅ Return topic details
    return res
    .status(200)
    .json(new APIResponse(200, topicData, "Topic content fetched successfully"));
  } catch (error) {
    console.error("Error fetching content:", error);
    return res
    .status(500).json(new APIError(500, "Failed to fetch topic content", error.message));
  }
};

