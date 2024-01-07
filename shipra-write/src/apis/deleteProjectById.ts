import axios from 'axios';

const BASE_URL = 'https://shipra-backend.vercel.app'; 

const deleteProjectById = async (project_id: string): Promise<void> => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteProject/${project_id}`);
    console.log('Project deleted:', response.data);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw new Error('Failed to delete project');
  }
};

export default deleteProjectById;