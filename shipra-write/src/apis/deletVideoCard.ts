import axios from 'axios';

const deleteVideo = async (videoId: string) => {
  try {
    const response = await axios.delete(`https://shipra-backend.vercel.app/deleteVideo/${videoId}`);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response?.data?.message || 'Failed to delete video');
  }
};

export default deleteVideo;