import React from "react";
import { BlogItemProps } from "@/lib/types";
import useModeStore from "@/store/mode";
import clsx from "clsx";

const BlogItem: React.FC<BlogItemProps> = ({ item, handlers }) => {
  const {mode}=useModeStore();
  switch (item.type) {
    case "Title":
      return (
        <>
          <p
            className={clsx(`outline-none  text-5xl md:text-6xl font-extrabold  capitalize border-y-0 focus:outline-none w-full pl-2 focus:border-2 ${(mode==="dark")?"hover:bg-gray-800":"hover:bg-gray-200"} font-saira py-4 border-l-[2px] border-l-white`,{
              "text-white":(mode==="dark"),
               "text-black":(mode==="light"),
          })}
            placeholder="Enter title . . ."
            contentEditable={true}
            onBlur={(e) => handlers?.onChangeHandler(e)}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </>
      );
    case "Subtitle":
      return (
        <h2
          className={clsx(`w-full text-3xl my-2  font-saira font-bold md:font-extrabold focus:outline-none pl-2 focus:border-l-2 border-gray-400 ${(mode==="dark")?"hover:bg-gray-800":"hover:bg-gray-200"} py-4 border-l-[2px] border-l-white`,{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}
          placeholder="Enter heading"
          contentEditable={true}
          onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
        >
          {item.content}
        </h2>
      );
    case "Description":
      return (
        <>
          <div className={`flex w-full text-white font-saira hover:bg-gray-200 py-4 ${(mode==="dark")?"hover:bg-gray-200":"hover:bg-gray-200"}  `}>
            <p
              className={clsx(`text-md w-full border-transparent  focus:outline-none resize-none focus:border-l-2 focus:border-gray-400 pl-2  h-auto font-saira text-xl tracking-wide border-l-[2px] border-l-white `,{
                "text-white":(mode==="dark"),
                 "text-black":(mode==="light"),
            })}
              draggable={false}
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e)}
              dangerouslySetInnerHTML={{ __html: item.content }}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </div>
        </>
      );
    case "Image":
      return (
        <div className={clsx(`w-full flex  flex-col justify-center  py-4 ${(mode==="dark")?"hover:bg-gray-800":"hover:bg-gray-200"}  `)}>
          <div className="flex flex-col w-full">
            <img
              src={item.content.imageUrl || ""}
              alt={item.content.imageCaption}
              className="object-fit max-w-[100%] md:max-w-[70%] mx-auto "
            />
            <input
              className={clsx("outline-none text-sm py-2 text-center border-none focus:outline-none w-full pl-2 focus:border-2  font-saira tracking-wider",{
                "text-white":(mode==="dark"),
                 "text-black":(mode==="light"),
            })}
              accept="image/*"
              type="file"
              placeholder="Enter a valid image url"
              onChange={(e) => {
                handlers?.onFileUpload && handlers.onFileUpload(e);
              }}
            ></input>

            <p
              className={clsx(" font-saira text-lg hover:underline text-center py-2 underline-offset-2 focus:outline-none ",{
                "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
              })}
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
            >
              {item.content.imageCaption || "Enter image caption"}
            </p>
          </div>
        </div>
      );
    case "Video":
      return (
        <div className={(`w-full flex justify-center py-6 ${(mode==="dark")?"hover:bg-gray-800":"hover:bg-gray-200"} `)}>
          <div className="flex flex-col gap-3 justify-between items-center">
            <video controls className="bg-gray-700 w-[80%] h-auto">
              <source
                src={`${item.content.videoUrl}` || ""}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <input
              className={clsx("outline-none text-sm tracking-wider font-saira   text-center border-none focus:outline-none w-full focus:border-2",{
                "text-white":(mode==="dark"),
                "text-black":(mode==="light"),
              })}
              type="file"
              accept="video/*"
              onChange={(e) => {
                handlers?.onFileUpload && handlers.onFileUpload(e);
              }}
            ></input>
            <p
              className={clsx(" font-saira text-lg hover:underline text-center  underline-offset-2 focus:outline-none",{
                "text-white":(mode==="dark"),
                "text-black":(mode==="light"),
              })}
              contentEditable={true}
              onBlur={(e) => handlers?.onChangeHandler(e.target.innerText)}
            >
              {item.content.videoCaption || "Enter video caption"}
            </p>
          </div>
        </div>
      );
    case "Bullet":
     
      return (
        <>
        <div className={`flex w-full  font-saira hover:bg-gray-300 py-4 ${(mode==="dark")?"hover:bg-gray-800":"hover:bg-gray-200"}  `}>
          <p
            className={clsx(`text-md w-full border-transparent list-disc  focus:outline-none resize-none focus:border-l-2 focus:border-gray-400 pl-2  h-auto font-saira text-xl tracking-wide border-l-[2px] border-l-white `,{
              "text-white":(mode==="dark"),
               "text-black":(mode==="light"),
          })}
            draggable={false}
            contentEditable={true}
            onBlur={(e) => handlers?.onChangeHandler(e)}
            dangerouslySetInnerHTML={{ __html: item.content }}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        </div>
      </>
      );
    default:
      return null;
  }
};

export default BlogItem;
