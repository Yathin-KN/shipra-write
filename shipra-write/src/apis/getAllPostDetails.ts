import axios, { AxiosResponse } from 'axios';

interface PostDetails {
  post_id: string;
  postDetails: {
    postTitle: string;
    postImage: string;
  };
}

const getAllPostDetails = async (): Promise<PostDetails[]> => {
  try {
    const response: AxiosResponse<PostDetails[]> = await axios.get<PostDetails[]>(`https://shipra-backend.vercel.app/postDetails`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch post details:', error);
    throw new Error('Failed to fetch post details');
  }
};

export { getAllPostDetails };
