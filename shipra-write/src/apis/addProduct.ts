import axios from "axios";
// import axiosClient from "./axios";
const PTSetProduct=async(data:any)=>{
    try{
       const response=await axios.post(`http://localhost:3000/addProduct`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error creating a post`)
    }
}

export default PTSetProduct;