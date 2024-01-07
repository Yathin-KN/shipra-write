import axios from 'axios';

const BASE_URL = 'https://shipra-backend.vercel.app'; 

const deletePostById = async (post_id: string): Promise<void> => {
  try {
    const response = await axios.delete(`${BASE_URL}/deletePost/${post_id}`);
    console.log('Post deleted:', response.data);
  } catch (error) {
    console.error('Error deleting post:', error);
    throw new Error('Failed to delete post');
  }
};

export default deletePostById;