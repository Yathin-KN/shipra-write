import { BlogItem as BlogItemProps } from "@/lib/types";
import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const VideoComponent = ({ index }: { index: number }) => {
  const [videoJson, setVideoJson] = useState<BlogItemProps>({
    type: "Video",
    content: {
      videoUrl: "",
      videoCaption: "",
    },
  });
  const [fileData, setFile] = useState<File | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updateBlogItem } = useBlogStore();
  const handleCaptionChange = (caption: string) => {
    setVideoJson((prev: any) => {
      updateBlogItem(index, {
        type: "Video",
        content: { ...prev.content, videoCaption: caption },
      });

      return {
        type: "Video",
        content: { ...prev.content, videoCaption: caption },
      };
    });
  };

  const handleVideoUrlChange = (videoUrl: string) => {
    setVideoJson((prev: any) => {
      updateBlogItem(index, {
        type: "Video",
        content: { ...prev.content, videoUrl: videoUrl },
      });
      return {
        type: "Video",
        content: { ...prev.content, videoUrl: videoUrl },
      };
    });
  };

  const onFileUpload = async (e: any) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleButtonClick = async () => {
    const formData = new FormData();
    if (fileData) {
      formData.append("media", fileData);
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://shipra-backend.vercel.app/admin/createUrl",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image uploaded successfully!", response.data);
        toast.success("Video uploaded successfully!");
        handleVideoUrlChange(response.data.url);
      } catch (error) {
        toast.error("Error uploading Video");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full relative">
      <span className="absolute top-4 right-4 text-xs">{index}</span>

      <BlogItem
        item={videoJson}
        handlers={{
          onChangeHandler: handleCaptionChange,
          onChangeVideoUrl: handleVideoUrlChange,
          onFileUpload: onFileUpload,
        }}
      />
      <Button
        className="absolute text-xs bg-gray-100 p-2 bottom-10 right-5 md:top-10 md:right-4"
        variant="outline"
        onClick={() => handleButtonClick()}
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}{" "}
        save
      </Button>
    </div>
  );
};

export default VideoComponent;
