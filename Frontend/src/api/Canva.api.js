import axiosInstance from "../../utils/axiosInstance";

export const saveCanvasImage = async (noteId, imageData) => {
    const id = noteId.noteId;
    try {
        console.log("Saving canvas image for noteId:", id);
        const response = await axiosInstance.post(`/api/canvas/${id}`, { image: imageData });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const loadCanvasImage = async (noteId) => {
    const id = noteId.noteId;
    try {
        console.log("Saving canvas image for noteId:", id);
        const response = await axiosInstance.get(`/api/canvas/${id}`);
        console.log("Response from loadCanvasImage API:", response.data.message);
        return response.data.message.image;
    } catch (error) {
        throw error.response?.data || error;
    }
}