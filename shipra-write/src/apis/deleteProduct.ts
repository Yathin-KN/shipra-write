import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  message: string;
}

const deleteProduct = async (titleId: string, productId: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.delete(`http://localhost:3000/deleteProduct/${titleId}/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete product');
  }
};

export default deleteProduct;