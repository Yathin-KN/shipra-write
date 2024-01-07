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
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  Type,
  XSquare,
} from "lucide-react";
import { toast } from "react-toastify";
// import { Input } from "@/components/ui/input";
// import { Category } from "@/lib/types";
import useModeStore from "@/store/mode";
import clsx from "clsx";
import Bullet from "@/components/bullet";
import { getAllPostDetails } from "@/apis/getAllPostDetails";
import deletePostById from "@/apis/deletPostById";
import { getAllProjectDetails } from "@/apis/getAllProjects";
import deleteProjectById from "@/apis/deleteProjectById";

// HamburgerMenu.tsx

interface PostDetails {
  post_id: string;
  postDetails: {
    postTitle: string;
    postImage: string;
  };
}

const HamburgerMenu = ({ type }: { type: "project" | "post" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [data, setData] = useState<PostDetails[]>([]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fetchPosts = async () => {
    try {
      const response = await getAllPostDetails();
      setData(response);
    } catch (err: any) {
      console.log(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await getAllProjectDetails();
      setData(response);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleDeletePost=async (id:string)=>{
    if(type==="post"){
      try {
        await deletePostById(id);
        fetchPosts();
      } catch (err: any) {
        console.log(err);
      }
    }else{
      try {
        await deleteProjectById(id);
        fetchProjects();
      } catch (err: any) {
        console.log(err);
      }
    }
   
  }
  const handleDelete=(id:string)=>{
      handleDeletePost(id);
  }
  useEffect(() => {
   
    if (type == "post") {
      fetchPosts();
    }else{
       fetchProjects();
    }
  }, []);
  return (
    <div className="fixed top-0 right-0 p-4">
      <button
        className="block  text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 fill-current relative z-50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-0 right-0 w-60 bg-white  border mx-4 mt-10">
          <div className="space-y-4 p-3 h-[80vh] overflow-y-auto  scrollbar-rounded scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-100">
            {data.length > 0 &&
              data.map((post, index) => {
                return (
                  <>
               

                    <div className="px-2 py-1 border" key={index.toString()}>
                    <span  className="py-1 px-3 border border-slate-100 bg-red-500 rounded-full text-xs text-white float-right cursor-pointer" onClick={()=>handleDelete(post.post_id)}>Delete</span>
                      <img
                        src={post.postDetails.postImage}
                        className="w-full aspect-video "
                      ></img>
                      <p className="text-sm py-4">
                        {post.postDetails.postTitle}
                      </p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

const Write = ({ selectedCard }: { selectedCard: any }) => {
  const [which, _] = useState<"project" | "post">(selectedCard);
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [categoryArray,setCategoryArray]=useState<String[]>([]);

  // const handelToggle = (str:any) => {
  //   setWhich(() => str);
  // };

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
    if (which === "post") {
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
    } else {
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
      <div className="relative z-40 ">
        <HamburgerMenu type={which} />
      </div>
      <div
        className={clsx({
          "bg-white": mode === "light",
          "bg-black": mode === "dark",
        })}
      ></div>
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
            "md:w-[80%] w-[95%] h-auto min-h-[100vh]md:px-10 py-10  mb-[100px] flex flex-col relative rounded-md px-2 border-x-[1px] border-gray-800",
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
              "sm:hidden fixed bottom-0 left-0 w-full py-2  border-slate-200 border-x-0 border-b-0  flex justify-evenly md:flex md:justify-around items-center border  ",
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
