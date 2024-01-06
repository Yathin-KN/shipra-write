import axios, { AxiosResponse } from 'axios';

interface AuthorizationResponse {
  message: string;
}

const verifyAuthorization = async (): Promise<AxiosResponse<AuthorizationResponse>> => {
  const token = localStorage.getItem('token') || '';

  try {
    const response: AxiosResponse<AuthorizationResponse> = await axios.post('https://shipra-backend-yathin-kn.vercel.app/authorize', null, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error:any) {
    throw new Error(`Error verifying authorization: ${error.message}`);
  }
};

export default verifyAuthorization;
