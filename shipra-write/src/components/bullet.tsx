import { useState } from "react";
import BlogItem from "./blogItem";
import useBlogStore from "@/store/blog";
function addBulletPoints(paragraph: string): string {
  const lines: string[] = paragraph.split('\n');
  const bulletPoints: string[] = lines.map(line => {
      const trimmedLine = line.trim();
      return trimmedLine !== '' ? (trimmedLine.startsWith('•') ? trimmedLine : `• ${trimmedLine}`) : '';
  });

  return bulletPoints.join('\n');
}
const Bullet = ({ index }: { index: number }) => {
  const [paragrahJson, setParagraphJson] = useState<any>({
    type: "Bullet",
    content: "",
  });
  const { updateBlogItem } = useBlogStore();
  const handleChange = (e: any) => {
    updateBlogItem(index,{
        type: "Bullet",
        content: addBulletPoints(e.target.innerText), 
    })
    setParagraphJson(() => {
      return {
        type: "Bullet",
        content: addBulletPoints(e.target.innerText),
      };
    });
  };

  return (
    <div className="w-full relative h-auto">
      <span className="absolute top-4 right-4">{index}</span>
      <BlogItem
        item={paragrahJson}
        handlers={{
          onChangeHandler: handleChange,
        }}
      />
    </div>
  );
};

export default Bullet;
