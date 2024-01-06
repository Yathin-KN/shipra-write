import axios from 'axios';

interface VideoData {
  title: string;
  videoUrl: string;
}

const createVideoCard = async (videoData: VideoData[]): Promise<void> => {
  try {
    const response = await axios.post('http://localhost:3000/createVideoCard', videoData);
    console.log('Video created:', response.data);
  } catch (error:any) {
    console.error('Error creating video:', error.message);
  }
};

export default createVideoCard;

