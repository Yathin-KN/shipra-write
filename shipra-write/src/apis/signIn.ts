import axios, { AxiosResponse } from 'axios';

interface SignInResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

export const signIn = async (email: string, password: string): Promise<boolean> => {
  try {
    const response: AxiosResponse<SignInResponse> = await axios.post(
      'https://shipra-backend.vercel.app/auth/signin',
      {
        email,
        password,
      }
    );

    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem('token', token);
      return true;
    }
  } catch (error) {
    console.error('Authentication error:', error);
  }

  return false;
};
