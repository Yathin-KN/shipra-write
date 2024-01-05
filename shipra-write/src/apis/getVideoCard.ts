import axios from 'axios';

interface Video {
  _id: string;
  title: string;
  videoUrl: string;
}

const getVideoCards = async (): Promise<void> => {
  try {
    const response = await axios.get('http://locahost:3000/getVideoCards');
    const videoCards: Video[] = response.data;
    console.log('Video Cards:', videoCards);
  } catch (error:any) {
    console.error('Error fetching video cards:', error.message);
  }
};

export default getVideoCards;
