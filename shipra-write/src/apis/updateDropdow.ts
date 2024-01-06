import axios, { AxiosResponse } from "axios";

interface DropdownItem {
  title: string;
  subcategories?: DropdownItem[];
}

const postDropdown = async (data: DropdownItem): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.post(
      "https://shipra-backend.vercel.app/updateDropDown", 
      data
    );
    return response.data;
  } catch (error:any) {
    throw new Error(`Error creating a post: ${error.message}`);
  }
};

export default postDropdown;
