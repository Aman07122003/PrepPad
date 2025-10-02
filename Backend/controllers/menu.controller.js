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
