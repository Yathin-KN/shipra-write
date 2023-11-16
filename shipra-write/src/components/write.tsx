import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Inp } from "./input";
import Paragraph from "./Paragraph";
import Heading from "./heading";
import useBlogStore from "@/store/blog";
import ImageComponent from "./imageComponent";
import VideoComponent from "./vedioComponent";
import { Badge } from "../components/ui/badge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PublishDialog from "./publishDialog";
import PTSetPost from "../apis/addPost";
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
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Category } from "@/lib/types";
import useModeStore from "@/store/mode";
import clsx from "clsx";
import Bullet from "@/components/bullet";

const Write = () => {
  const [compoenent, setComponenet] = useState<any[]>([]);
  const [length, setLength] = useState<number>(0);
  const { blogItems, removeLastBlogItem } = useBlogStore();
  const [newCategory, setNewCategory] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [categoryArray,setCategoryArray]=useState<String[]>([]);

 

  const [post, setPost] = useState({
    postTitle: "",
    postDescription: "",
  });

  const handleNewCategoryChange = (e: any) => {
    setNewCategory(e.target.value);
  };
  const handelCategoryChange = () => {
    setPost((prev: any) => {
      return { ...prev, categories: selectedCategories };
    });
  };

  useEffect(() => {
    handelCategoryChange();
  }, [selectedCategories]);

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
    } else if(name==="Bullet"){
      setComponenet((prev: any) => {
        return [...prev, <Bullet index={length}/>];
      });
    }else{
      setComponenet((prev: any) => prev.slice(0, -1));
      removeLastBlogItem();
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await PTSetPost({
        postDetails: post,
        content: blogItems,
      });
      toast.success("Successfully posted !!!",{
        delay:1500
      });
      console.log(response);
    } catch (error) {
      console.log("error : ", error);
      toast.error("Error posting !!!",{
        delay:1500
      });
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setLength(() => {
      let len = compoenent.length;
      return len;
    });
  }, [compoenent]);

  function handleAddCategory(): void {
    setCategories((prev: any) => {
      return [
        ...prev,
        {
          categoryId: categories.length,
          categoryName: newCategory,
        },
      ];
    });
    setNewCategory("");
  }

  const handelCategoryClick = (category: Category) => {
    setSelectedCategories((prev) => {
      const isCategorySelected = prev.some(
        (cat) => cat.categoryId === category.categoryId
      );

      if (isCategorySelected) {
        return prev.filter((cat) => cat.categoryId !== category.categoryId);
      } else {
        return [...prev, category];
      }
    });
  };
  const {mode}=useModeStore();
  return (
    <>
      <div className={clsx({
            "bg-white":(mode==="light"),
             "bg-black":(mode==="dark"),
        })}>
      {/* <MainNav /> */}
      </div>
      <ToastContainer toastClassName={() => 
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
      }/>
      <div className={clsx("w-full h-auto  min-h-screen  bg-opacity-90  flex justify-center",{
            "bg-white":(mode==="light"),
             "bg-black":(mode==="dark"),
        })}>
        <div className={clsx("md:w-[80%] w-[95%] h-auto min-h-[100vh]md:px-10 py-10 mt-[50px] mb-[100px] flex flex-col relative rounded-md px-2 border-x-[1px] border-gray-800",{
            "bg-white":(mode==="light"),
             "bg-black":(mode==="dark"),
        })}>
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
              <div className="flex justify-end bg-black text-white rounded-none">
                <AlertDialogCancel className="rounded-none">X</AlertDialogCancel>
              </div>
              <PublishDialog handler={handlePostChange} details={post} />
              <AlertDialogFooter>
                <div className="flex flex-col gap-4 w-full bg-black text-white font-saira">
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
                  <div className="flex flex-col flex-wrap">
                    {selectedCategories ? (
                      <p className="text-md font-saira text-white uppercase">Selected Categories :</p>
                    ):(<div className="text-md font-saira text-white uppercase">No Categories selected</div>)}
                    <div className="flex gap-2 flex-wrap">
                      {selectedCategories &&
                        selectedCategories.map((category) => {
                          return (
                            <Badge className="text-ms text-white">
                              {category.categoryName}
                            </Badge>
                          );
                        })}
                    </div>
                  </div>
                  <div className="w-full h-max-[20%] overflow-y-scroll">
                    {categories &&
                      categories.map((category) => {
                        return (
                          <Badge
                            className="text-xs font-light font-saira text-white uppercase tracking-wider mx-1 my-1 py-1 cursor-pointer"
                            variant="outline"
                            onClick={() => handelCategoryClick(category)}
                          >
                            {category.categoryName}{" "}
                            <span className="ml-1 p-2 max-h-4 max-w-4 text-center flex items-center rounded-full bg-gray-400 text-white text-xs">
                              <>{category.postCount}</>
                            </span>
                          </Badge>
                        );
                      })}
                  </div>
                  <div className="flex justify-center">
                    <Input
                      value={newCategory}
                      onChange={(e:any) => handleNewCategoryChange(e)}
                    />
                    <Button
                      onClick={() => handleAddCategory()}
                      value="outline"
                      className="text-xs ml-4 rounded-none font-saira tracking-wide border border-t-white"
                    >
                      <span className="font-saira break-normal">Category +</span>
                    </Button>
                  </div>
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

          <div className={clsx("sm:hidden fixed bottom-0 left-0 w-full py-2  border border-white  flex justify-evenly md:flex md:justify-around items-center",{
            "bg-white":(mode==="light"),
             "bg-black":(mode==="dark"),
             "text-white":(mode==="dark"),
             "text-black":(mode==="light")
        })}>
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
