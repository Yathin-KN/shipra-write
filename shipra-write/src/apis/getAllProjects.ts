import axios, { AxiosResponse } from 'axios';

interface ProjectDetails {
  post_id: string;
  postDetails: {
    postTitle: string;
    postImage: string;
  };
}

const getAllProjectDetails = async (): Promise<ProjectDetails[]> => {
  try {
    const response: AxiosResponse<ProjectDetails[]> = await axios.get<ProjectDetails[]>(`https://shipra-backend.vercel.app/projectDetails`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch project details:', error);
    throw new Error('Failed to fetch project details');
  }
};

export { getAllProjectDetails };
