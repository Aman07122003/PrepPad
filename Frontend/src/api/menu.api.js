import axiosInstance from "../../utils/axiosInstance";

export const getAptitudeData = async (section) => {
    try {
        const response = await axiosInstance.get(`/menu/${section}`);
     return response.data.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const getTopicContent = async (section, chapter, topic) => {
    try {
        const response = await axiosInstance.get(`/menu/${section}/${chapter}/${topic}`);
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}