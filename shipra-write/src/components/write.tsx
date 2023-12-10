import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Inp } from "./input";
import Paragraph from "./Paragraph";
import Heading from "./heading";
import useBlogStore from "@/store/blog";
import ImageComponent from "./imageComponent";
import VideoComponent from "./vedioComponent";
import { Badge } from "../components/ui/badge";
import "react-toastify/dist/ReactToastify.css";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PublishDialog from "./publishDialog";
import PTSetPost from "../apis/addPost";
import PTSetProduct from "@/apis/addProduct";
import {
  AlignJustify,
  HeadingIcon,
  ImageIcon,
  List,
  Loader2,
  PlaySquare,
  Type,
  XSquare,
} from "lucide-react";
import { toast } from "react-toastify";
// import { Input } from "@/components/ui/input";
// import { Category } from "@/lib/types";
import useModeStore from "@/store/mode";
import clsx from "clsx";
import Bullet from "@/components/bullet";

const Write = () => {
  const [which, setWhich] = useState<"product" | "post">("post");
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [categoryArray,setCategoryArray]=useState<String[]>([]);

  const handelToggle = (str:any) => {
    setWhich(() => str);
  };

  const [post, setPost] = useState({
    postTitle: "",
    postDescription: "",
  });

  // const handleNewCategoryChange = (e: any) => {
  //   setNewCategory(e.target.value);
  // };
  // const handelCategoryChange = () => {
  //   setPost((prev: any) => {
  //     return { ...prev, categories: selectedCategories };
  //   });
  // };

  // useEffect(() => {
  //   handelCategoryChange();
  // }, [selectedCategories]);

  const handlePostChange = (key: string, value: string) => {
    setPost((prev: any) => {
      return { ...prev, [key]: value };
    });
  };

  const handleClick = (name: string) => {
    if (name === "title") {
      setComponenet((prev: any) => {
        return [...prev, <Inp index={length} />];
      });
    } else if (name === "paragraph") {
      setComponenet((prev: any) => {
        return [...prev, <Paragraph index={length} />];
      });
    } else if (name === "subtitle") {
      setComponenet((prev: any) => {
        return [...prev, <Heading index={length} />];
      });
    } else if (name === "image") {
      setComponenet((prev: any) => {
        return [...prev, <ImageComponent index={length} />];
      });
    } else if (name === "video") {
      setComponenet((prev: any) => {
        return [...prev, <VideoComponent index={length} />];
      });
    } else if (name === "save") {
      console.log(blogItems);
    } else if (name === "Bullet") {
      setComponenet((prev: any) => {
        return [...prev, <Bullet index={length} />];
      });
    } else {
      setComponenet((prev: any) => prev.slice(0, -1));
      removeLastBlogItem();
    }
  };

  const handleSubmit = async () => {
     if(which==="post"){
      try {
        setIsLoading(true);
        const response = await PTSetPost({
          postDetails: post,
          content: blogItems,
        });
        toast.success("Successfully posted !!!", {
          delay: 1500,
        });
        console.log(response);
      } catch (error) {
        console.log("error : ", error);
        toast.error("Error posting !!!", {
          delay: 1500,
        });
      } finally {
        setIsLoading(false);
      }
     }else{
      try {
        setIsLoading(true);
        const response = await PTSetProduct({
          postDetails: post,
          content: blogItems,
        });
        toast.success("Successfully posted !!!", {
          delay: 1500,
        });
        console.log(response);
      } catch (error) {
        console.log("error : ", error);
        toast.error("Error posting !!!", {
          delay: 1500,
        });
      } finally {
        setIsLoading(false);
      }
     }
  };
  useEffect(() => {
    setLength(() => {
      let len = compoenent.length;
      return len;
    });
  }, [compoenent]);

  const { mode } = useModeStore();
  return (
    <>
      <div
        className={clsx({
          "bg-white": mode === "light",
          "bg-black": mode === "dark",
        })}
      >
        {/* <MainNav /> */}
      </div>
      {/* <ToastContainer
        toastClassName={() =>
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
        }
      /> */}
      <div
        className={clsx(
          "w-full h-auto  min-h-screen  bg-opacity-90  flex justify-center",
          {
            "bg-white": mode === "light",
            "bg-black": mode === "dark",
          }
        )}
      >
        <div
          className={clsx(
            "md:w-[80%] w-[95%] h-auto min-h-[100vh]md:px-10 py-10 mt-[50px] mb-[100px] flex flex-col relative rounded-md px-2 border-x-[1px] border-gray-800",
            {
              "bg-white": mode === "light",
              "bg-black": mode === "dark",
            }
          )}
        >
          <AlertDialog>
            <AlertDialogTrigger>
              <Badge
                className="absolute text-xs font-saira tracking-wider top-4 right-4 md:text-sm"
                variant="outline"
              >
                Publish
              </Badge>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex justify-end  text-black rounded-none">
                <AlertDialogCancel className="rounded-none">
                  X
                </AlertDialogCancel>
              </div>
              <PublishDialog handler={handlePostChange} details={post} />
              <div>The modal will be added to : {which}</div>
              <AlertDialogFooter>
                <div className="flex flex-col gap-4 w-full  text-black font-saira">
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="outline_custom"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}{" "}
                    Publish
                  </Button>
                  <ToggleGroup type="single">
                  <ToggleGroupItem value="product" onClick={()=>handelToggle("product")}>product</ToggleGroupItem>
                  <ToggleGroupItem value="post"  onClick={()=>handelToggle("post")}>post</ToggleGroupItem>
                </ToggleGroup>
                </div>
                
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="py-4">
            {compoenent &&
              compoenent.map((comp: any) => {
                return comp;
              })}
          </div>

          <div
            className={clsx(
              "sm:hidden fixed bottom-0 left-0 w-full py-2  border border-white  flex justify-evenly md:flex md:justify-around items-center",
              {
                "bg-white": mode === "light",
                "bg-black": mode === "dark",
                "text-white": mode === "dark",
                "text-black": mode === "light",
              }
            )}
          >
            <Button
              onClick={() => handleClick("title")}
              className="border-none shadow-none p-2"
              name="title"
              variant="outline"
            >
              <Type size={28} strokeWidth={1} />
            </Button>

            <Button
              onClick={() => handleClick("subtitle")}
              name="subtitle"
              className="border-none shadow-none p-2"
              variant="outline"
            >
              <HeadingIcon size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("Bullet")}
              className="border-none shadow-none p-2"
              name="Bullet"
              variant="outline"
            >
              <List size={28} strokeWidth={1} />
            </Button>
            <Button
              onClick={() => handleClick("paragraph")}
              className="border-none shadow-none p-2"
              name="paragraph"
              variant="outline"
            >
              <AlignJustify size={28} strokeWidth={1} />
            </Button>

            <Button
              onClick={() => handleClick("image")}
              className="border-none shadow-none m-0 w-auto h-auto p-2"
              name="image"
              variant="outline"
            >
              <ImageIcon strokeWidth={1} size={28} />
            </Button>
            <Button
              onClick={() => handleClick("video")}
              className="border-none shadow-none p-2"
              name="video"
              variant="outline"
            >
              <PlaySquare size={28} strokeWidth={1} />
            </Button>

            <Button
              onClick={() => handleClick("subtitl")}
              name="ttle"
              className="border-none shadow-none p-2"
              variant="outline"
            >
              <XSquare size={28} strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
