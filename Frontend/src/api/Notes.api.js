import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";

export const createNote = async (formData) => {
    try {
      const response = await axiosInstance.post('/notes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };

export const dsaNotes = async (data) => {
    try {
        const response = await axiosInstance.post('/notes/dsa', data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}
  

export const getAllNotes = async () => {
    try {
        const response = await axiosInstance.get('/notes');
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const getNoteById = async (id) => {
    try {
        const response = await axiosInstance.get(`/notes/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const deleteNote = async (id) => {
    try {
        const response = await axiosInstance.delete(`/notes/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const downloadNoteAsPDF = async (id) => {
    try {
        const response = await axiosInstance.get(`/notes/${id}/download`, {
            responseType: 'blob',
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}



