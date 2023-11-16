import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";

const Heading= ({ index }: { index: number }) => {
  const [subtitleJson, setSubtitleJson] = useState<any>({
    type: "Subtitle",
    content: "",
  });
  const { updateBlogItem } = useBlogStore();
  
  const handleChange = (heading: string) => {
    updateBlogItem(index,{
        type: "Subtitle",
        content: heading,
      })

    setSubtitleJson(() => {
      return {
        type: "Subtitle",
        content: heading,
      };
    });
  };

  return (
    <div className="w-full relative h-auto">
      <span className="absolute top-4 right-4">{index}</span>
      <BlogItem
        item={subtitleJson}
        handlers={{
          onChangeHandler: handleChange,
        }}
      />
    </div>
  );
};

export default Heading;
