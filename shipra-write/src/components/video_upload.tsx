import createVideoCard from "@/apis/addVideoCard";
import deleteVideo from "@/apis/deletVideoCard";
import getVideoCards from "@/apis/getVideoCard";
import { useState, useRef, useEffect } from "react";
// import * as Yup from "yup";
// import axios from "axios";
import { Link } from "react-router-dom";
import ShipraLogo from "./../assets/Shipra_logo.svg"

interface VideoData {
  title: string;
  videoUrl: string;
  _id?:string;
}

const Video = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [videosArray, setVideosArray] = useState<VideoData[]>([]);
  const [videoPreview, setVideoPreview] = useState<string>("");
  const [initialNum,setInitialNum]=useState<number>(0);
  const [formValues, setFormValues] = useState<{ title: string }>({
    title: "",
  });

  const fetchVideoCards = async (): Promise<void> => {
    try {
      const videoCards: VideoData[] = await getVideoCards();
      setVideosArray(videoCards);
      setInitialNum(videoCards.length);
    } catch (error:any) {
      console.error('Error fetching video cards:', error.message);
    }
  };
  
  useEffect(() => {
    fetchVideoCards();
  }, []);
  const formRef = useRef<HTMLFormElement>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setVideo(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) setVideoPreview(e.target.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFinalUpload = async (title: string) => {
    try {
      if (!video || !title) return;

      const formData = new FormData();
      formData.append("media", video);

      // const response = await axios.post(
      //   "https://shipra-backend.vercel.app/admin/createUrl",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      const publicUrl = "https://www.youtube.com/embed/9nf1TBlSq-M?si=yLb6fzWZZDFVe9Rx";
      setUploadedUrl("");

      const newVideo: VideoData = { title: title, videoUrl: publicUrl };
      setVideosArray([...videosArray, newVideo]);
      setVideo(null);

      console.log("hello")

      setVideoPreview("")
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error uploading the video:", error);
    }
  };

 
  const handleUploadAll = async () => {
    try {
      console.log(videosArray);
      await createVideoCard(videosArray); 
    } catch (error:any) {
      console.error('Error uploading videos:', error.message);
    }
  };

  const handleDelete = async (id: string | undefined, index: number) => {
    if (id !== undefined) {
      try {
        await deleteVideo(id);
        const updatedVideos = videosArray.filter((_, idx) => idx !== index);
        setVideosArray(updatedVideos);
        fetchVideoCards();
      } catch (error:any) {
        console.error('Error deleting video:', error.message);
      }
    } else {
      const updatedVideos = [...videosArray.slice(0, index), ...videosArray.slice(index + 1)];
      setVideosArray(updatedVideos);
    }
  };

  return (
    <>
     <Link to={"/home"} className="w-full p-4">
           <img src={ShipraLogo} className="px-4" ></img>
           
      </Link>
      <div className=" w-screen grid grid-cols-1 md:grid-cols-2  ">
      <div className="  col-span-1 relative md:p-4">
        <h2 className="text-xl mb-4 text-center">Upload New Video</h2>
        <div className="flex flex-col md:flex-row gap-4  mt-6">
          <div className="flex flex-col">
            {videoPreview ? (
              <div className=" w-full px-4">
                <p>Video Preview:</p>
                <video controls height="240" className="w-[400px] md:w-[600px]">
                  <source src={videoPreview} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="w-[370px] mx-auto rounded-md md:w-[400px]  h-[240px]  bg-slate-200"></div>
            )}
          </div>
          <div className="px-3">
          {uploadedUrl && (
                <div className="mb-4 ">
                  <p className="text-sm"><p className="font-semibold">Uploaded URL:</p> {uploadedUrl}</p>
                </div>
              )}
            <form
              ref={formRef}
              onSubmit={(event) => {
                event.preventDefault();
                handleFinalUpload(formValues.title);
                setFormValues({ title: "" });
              }}
            >
              <div className="mb-4">
                <input
                  type="file"
                  name="video"
                  onChange={handleVideoChange}
                  accept="video/*"
                  className="text-xs"
                />
                <div className="text-red-500 text-xs"></div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter video title"
                  className="focus:outline-none px-1 py-1"
                  value={formValues.title}
                  onChange={(e) =>
                    setFormValues({ ...formValues, title: e.target.value })
                  }
                />
                <div className="text-red-500 text-xs py-3"></div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md mr-4"
              >
                Save
              </button>
             
              {(videosArray.length) > initialNum && (
                <div className="fixed top-4 md:absolute md:top-0 right-4">
                  <button
                    type="button"
                    onClick={() => handleUploadAll()}
                    className="bg-green-500 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Upload All
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-1 p-4">
      <h2 className="text-xl mb-4 text-center">Uploaded Videos :</h2>
      {videosArray.length==0 && <p className="text-center text-red-600">No videos</p>}
      <div className=" space-y-3 py-3 ">
      {videosArray.map((video, index) => (
            <div key={index} className="border rounded-sm p-1 md:flex gap-4">
              <div className="">
              {/* <video controls className="mt-2 w-[600px]">
                <source src={""} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            
              <iframe className="mt-2 w-[300px] mx-auto" src={video.videoUrl}>

              </iframe>
              </div>
              <div className="py-2 space-y-3 relative ">
              <p className=" text-sm flex gap-1"><p>Title :</p><p>{video.title}</p></p>
              <p className=" text-sm gap-1"><p>Video url :</p><p>{video.videoUrl}</p></p>
              <span onClick={()=>handleDelete(video?._id,index)} className="py-1 px-3 borderborder-slate-100 bg-red-500 rounded-full text-xs text-white float-right mb-1 cursor-pointer  absolute bottom-0 right-2 ">Delete</span>
              </div>
              
            </div>
          ))}
      </div>
      </div>

      
    </div>
    </>
    
  );
};

export default Video;

