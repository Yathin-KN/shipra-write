import axios from "axios";
// import axiosClient from "./axios";
const PTSetPost=async(data:any)=>{
    try{
       const response=await axios.post(`http://localhost:3000/addPost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error creating a post`)
    }
}

export default PTSetPost;