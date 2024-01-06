import axios, { AxiosResponse } from "axios";

interface DropdownItem {
  _id: string;
  title: string;
  subcategories?: DropdownItem[];
  __v: number;
}

interface AllDropdownItemsResponse {
  allDropdownItems: DropdownItem[];
}

const getAllDropdownItems = async (): Promise<AxiosResponse<AllDropdownItemsResponse>> => {
  try {
    const response: AxiosResponse<AllDropdownItemsResponse> = await axios.get(
      "https://shipra-backend.vercel.app/getDropdown" ,{
      }
    );
    return response;
  } catch (error:any) {
    throw new Error(`Error fetching dropdown items: ${error.message}`);
  }
};

export default getAllDropdownItems;
