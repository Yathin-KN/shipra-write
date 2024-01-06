import axios from 'axios';

interface VideoData {
  _id: string;
  title: string;
  videoUrl: string;
}

const getVideoCards = async (): Promise<VideoData[]> => {
  try {
    const response = await axios.get<VideoData[]>('https://shipra-backend.vercel.app/getVideoCards');
    return response.data;
  } catch (error:any) {
    console.error('Error fetching video cards:', error.message);
    throw error; 
  }
};

export default getVideoCards;

