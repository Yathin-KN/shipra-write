import axiosClient from "./axios";
// const BASE_URL=process.env.URL
const PTSetPost=async(data:any)=>{
    try{
       const response=await axiosClient.post(`/client/addPost`,data)
       return response.data;
    }catch(error){
       throw new Error(`Error creating a post`)
    }
}

export default PTSetPost;