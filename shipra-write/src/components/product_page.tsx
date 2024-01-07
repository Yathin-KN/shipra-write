import createProduct from "@/apis/createProducts";
import deleteProduct from "@/apis/deleteProduct";
import getProductsByTitle from "@/apis/getAllProductsByTitle";
import getAllDropdownItems from "@/apis/getDropdown";
import postDropdown from "@/apis/updateDropdow";
import axios from "axios";
import clsx from "clsx";
import { ArrowLeftCircle, Loader2, UploadCloud } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DropdownItem {
  title: string;
  subcategories?: DropdownItem[];
}

const Dropdown = ({
  setMetaData,
  title,
}: {
  setMetaData: any;
  title: string;
}) => {
  const [data, setData] = useState<DropdownItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [subCategoryTitle, setSubCategoryTitle] = useState("");
  const [showSubForm, setShowSubForm] = useState(false);
  const [position, setPosition] = useState<string | null>(null);
  const [subposition, setSubPosition] = useState<string | null>(null);
  const [selectedID,setSelectedId]=useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemTitle(event.target.value);
  };
  const handleSubInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubCategoryTitle(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllDropdownItems();
        setData(response.data.allDropdownItems);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
      }
    };

    fetchData();
  }, []);

  const [loading,setIsLoading]=useState<boolean>(false)
  const updateDropdown = async () => {
    try {
      setIsLoading(true)
      await postDropdown(data[0]);
      const response = await getAllDropdownItems();
      setData(response.data.allDropdownItems);
    } catch (error) {
      console.error("Error updating dropdown:", error);
    }finally{
      setIsLoading(false)
    }
  };

  const addSubCategory = () => {
    const query = subposition?.split(".");
    console.log("called");
    if (query) {
      setData((prev) => {
        const newData = [...prev];
        let currentData = newData[0];
        for (let i = 1; i < query.length; i++) {
          const index = parseInt(query[i]);
          if (currentData.subcategories !== undefined) {
            console.log("accessed-", index);
            currentData = currentData.subcategories[index];
          }
        }
        currentData["subcategories"] = [
          {
            title: subCategoryTitle,
          },
        ];
        console.log("check", currentData);
        return newData;
      });
    }
    setSubCategoryTitle("");
    setShowSubForm(false);
  };
  const handleAddSubcategories = (id: string) => {
    setShowSubForm(true);
    setSubPosition(id);
  };
  const handleAddItem = (id: string) => {
    setShowForm(true);
    if(showSubForm){
      setShowSubForm(false)
    }
    setPosition(id);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSubCategory();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("called");

    if (position) {
      const query = position.split(".").slice(0, -1);
      setPosition(null);
      if (query.length > 0 && query[0] === "0") {
        setData((prev) => {
          let newData = [...prev];
          let currentData: DropdownItem[] | undefined =
            newData[0].subcategories;

          for (let i = 1; i < query.length; i++) {
            const index = parseInt(query[i]);

            if (
              currentData &&
              currentData[index] &&
              currentData[index].subcategories
            ) {
              currentData = currentData[index].subcategories;
            } else {
              if (currentData && currentData[index]) {
                currentData[index].subcategories = [];
                currentData = currentData[index].subcategories;
              } else {
                console.error("Error: Invalid path");
                return prev;
              }
            }
          }

          currentData?.push({ title: newItemTitle });

          return newData;
        });
      } else {
        console.log(
          "Query does not follow the expected pattern or doesn't start with '0'"
        );
      }
    }
    setShowForm(false);
    setNewItemTitle("");
  };

  const handleSubcategory = (
    subcategories: DropdownItem[],
    selectedItem: DropdownItem,
    newTitle: string
  ): DropdownItem[] => {
    return subcategories.map((subItem) => {
      if (subItem === selectedItem) {
        if (!subItem.subcategories) {
          subItem.subcategories = [];
        }
        subItem.subcategories.push({ title: newTitle });
      } else {
        if (subItem.subcategories) {
          subItem.subcategories = handleSubcategory(
            subItem.subcategories,
            selectedItem,
            newTitle
          );
        }
      }
      return subItem;
    });
  };

  const handleMetadata = (title: string, id: string) => {
    setMetaData(() => {
      const newData = {
        title: title,
        id: id,
      };
      return newData;
    });
  };

  const renderSubcategories = (
    items: DropdownItem[] | undefined,
    level: string
  ) => {
    if (!items) return null;

    return (
      <ul
        className={clsx(`relative z-[${parseInt(level)*10}] text-xs w-fit`, {
          "left-[7rem]": level !== "0",
        })}
        data-testid="no-strict-mode"
      >
        {items.map((item, index) => {
          const id = `${level}.${index}`;

          return (
            <li key={index} className="w-fit">
              <div
                onClick={() => {
                  handleMetadata(item.title, id);
                  setShowForm(false);
                  setSelectedId(id)
                }}
                className={clsx(
                  "py-2 px-3 border rounded-sm w-[7rem] text-center flex justify-between cursor-pointer",
                  {
                    "bg-gray-100": selectedID === id,
                  }
                )}
              >
                {item.title}
                {!item.subcategories && (
                  <div
                    className="w-4 h-4 rounded-full bg-gray-100 flex justify-center items-center"
                    onClick={() => handleAddSubcategories(id)}
                  >
                    <span>{`>`}</span>
                  </div>
                )}
              </div>
              {id.startsWith(title) &&
                renderSubcategories(item.subcategories, id)}
              {index === items.length - 1 && (
                <button
                  onClick={() => {
                    handleAddItem(id);
                  }}
                  className="py-2 px-3 border rounded-sm my-1 w-[7rem] text-center"
                >
                  +
                </button>
              )}
            </li>
          );
        })}
        <div></div>
      </ul>
    );
  };

  return (
    <div className=" h-[80vh] relative overflow-y-auto  scrollbar-rounded scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-100">
      <button onClick={() => updateDropdown()} className="py-1 px-3 rounded-full bg-blue-500 text-xs text-white font-semibold absolute right-4 flex items-center justify-center">{loading  && <Loader2 size={16}/>}<p>{loading?"updating...":"update"}</p></button>
      {data.map((item, index) => {
        const id = `${index}`;
        return (
          <div key={index} className="text-xs">
            <div
              onClick={() => console.log(`Depth: ${id}`)}
              className="py-2 px-3 border rounded-sm my-2 w-[7rem] text-center"
            >
              {item.title}
            </div>
            {renderSubcategories(item.subcategories, id)}
          </div>
        );
      })}
      <div className="">
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white py-6  fixed bottom-0">
          <p className="text-sm">Add new category</p>
          <input
            type="text"
            value={newItemTitle}
            onChange={handleInputChange}
            className="focus:outline-none py-1 mr-3 px-2 border rounded-sm my-2 "
          />
          <button
            type="submit"
            className="py-2 px-3 border rounded-sm my-2 w-[7rem] text-center text-sm bg-blue-500 font-semibold text-white"
          >
            Add
          </button>
        </form>
      )}

      {showSubForm && (
        <form onSubmit={handleSubSubmit} className="bg-white py-6  fixed bottom-0">
          <p className="text-sm">Add new sub category</p>
          <input
            type="text"
            value={subCategoryTitle}
            onChange={handleSubInputChange}
            className="focus:outline-none py-1 mr-3 px-3 border rounded-sm my-2 "
          />
          <button
            type="submit"
            className="py-2 px-3 border rounded-sm my-2 w-[7rem] text-center text-sm bg-green-500 font-semibold text-white"
          >
            Add
          </button>
        </form>
      )}
      </div>
    </div>
  );
};

interface ProductDetail {
  productUrl: string;
  productTitle: string;
  _id?:string;
}
interface Product {
  _id?:string;
  title: string;
  products: ProductDetail[];
}
const ProductUpload = ({ metaData }: { metaData: MetaData | null }) => {
  const [productData, setProductData] = useState<Product | null>({
    title: metaData?.title || "",
    products: [],
  });

  const fetchData = async () => {
    if (metaData?.title) {
      try {
        const products = await getProductsByTitle(metaData.title);
        setProductData( products );
        console.log("check---",products)
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
  };
  useEffect(()=>{
  

    fetchData();
  },[metaData?.title])

  const [productTitle, setProductTitle] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: File | undefined = event.target.files?.[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const productUpload = async () => {
    const formData = new FormData();
    if (file) {
      try {
        formData.append("media", file);
        const response = await axios.post(
          "https://shipra-backend.vercel.app/admin/createUrl",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image uploaded successfully!", {
          productUrl: response.data.url,
          productTitle: productTitle,
        });
        setFile(undefined);
        
        setProductData((prev: Product | null) => {
          if (prev) {
            const newProduct: Product = {
              ...prev,
              products: [
                ...prev.products,
                {
                  productTitle: productTitle,
                  productUrl: response.data.url,
                },
              ],
            };
            console.log(newProduct);
            return newProduct;
          }else{
            return {
              title:metaData?.title || "",
              products:[
                {
                  productTitle: productTitle,
                  productUrl: response.data.url,
                }
              ]
            }
          }
        });
        console.log(productData)
      } catch (error) {
        console.error("Error uploading image:", error);
      }finally{
        setImagePreview("");
        setProductTitle("");
      }
    }
  };

  const allUpload = async () => {
    if(productData){
      try {
        const response = await createProduct(productData);
        console.log('Product data uploaded:', response);
        return response;
      } catch (error) {
        console.error('Error uploading product data:', error);
        throw new Error('Failed to upload product data');
      }
    }
  };

  const removeProductAtIndex = (index: number) => {
    if (productData && productData.products.length > index) {
      const updatedProducts = [...productData.products];
      updatedProducts.splice(index, 1);
  
      setProductData({
        ...productData,
        products: updatedProducts,
      });
    }
  };
  

  const callDeleteProductAPI = async (titleId: string, productId: string): Promise<void> => {
    try {
      const result = await deleteProduct(titleId, productId);
      console.log(result.message);
      fetchData();
    } catch (error:any) {
      console.error(error.message);
    }
  };
  
  const handleDelete=(productId:string | undefined ,titleId:string | undefined,index:number)=>{
      if(productId===undefined || titleId===undefined){
         removeProductAtIndex(index);
      }else{
         callDeleteProductAPI(titleId,productId);
      }
  }
  return (
    <div className="w-full h-full border rounded-md   ">
      <div
        className="py-1 px-3 rounded-full cursor-pointer bg-blue-500 font-bold text-white absolute top-4 right-4 text-sm flex gap-3 items-center border"
        onClick={() => allUpload()}
      >
        <p className="text-xs">Upload</p>
        <UploadCloud strokeWidth={1.75} size={20} />
      </div>

      <div
        className={clsx(
          "text-4xl font-extrabold my-6 text-center uppercase flex flex-col ",
          {
            "text-slate-200": metaData?.title === "",
          }
        )}
      >
        {metaData?.title !== "" ? metaData?.title : "select from dropdown"}
      </div>
      <div className="text-3xl font-semibold text-center uppercase">
        {metaData?.subtitle}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4  flex-grow-0">
        <div className="col-span-3  bottom-0 p-4 flex gap-4">
          {productData?.products.map((product,index) => {
            return (
              <div className="p-4 border rounded-md w-60 h-fit relative mx-auto md:mx-0">
                <span onClick={()=>handleDelete(product?._id,productData?._id,index)} className="py-1 px-3 borderborder-slate-100 bg-red-500 rounded-full text-xs text-white float-right mb-1 cursor-pointer">Delete</span>
                <img src={product.productUrl} className="aspect-square"></img>
                <p className="my-2 text-center font-semibold">
                  {product.productTitle}
                </p>
              </div>
            );
          })}
        </div>
        {metaData?.title ? (
          <div className="col-span-1 border  bottom-0 p-4 flex gap-4 ">
            <div className="bg-white rounded-lg   mx-auto mt-8 ">
              <div className="mb-2 ">
                {imagePreview ? (
                  <div className="mb-4">
                    <img
                      src={imagePreview}
                      alt="Product Preview"
                      className="w-full rounded-md aspect-square"
                    />
                  </div>
                ) : (
                  <div className="bg-slate-100 w-full aspect-square mb-3"></div>
                )}
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border border-gray-300 p-2 w-full rounded-md text-xs "
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="productTitle"
                  placeholder="Enter Product Title"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="border border-gray-300 p-2 w-full rounded-md text-sm"
                />
              </div>

              <button
                className="bg-green-500 text-white py-1 px-3  hover:bg-green-600 text-xs rounded-full "
                onClick={() => productUpload()}
              >
                Upload
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface MetaData {
  title: string;
  subtitle?: string;
  id?: string;
}
const ProductPage = () => {
  const [metaData, setMetaData] = useState<MetaData | null>({
    title: "",
  });
  return (
    <>
        {/* <Link to={"/home"} className="py-4 px-4 w-screen bg-slate-50 z-50 ">
           <img src="https://6596b5a88f29e103c1024276--cool-macaron-1a73d4.netlify.app/images/Shipra_logo.svg"></img>
        </Link> */}

        <div className="max-w-screen grid grid-cols-1 md:grid-cols-6 h-screen">
     
     <div className="col-span-2 py-8 md:py-3 pl-3">
       <Link to={"/home"} className="flex items-center gap-2">
         <ArrowLeftCircle  className="text-slate-600"/>
         <p className="text-sm">Home</p>
       </Link>
       <Dropdown setMetaData={setMetaData} title={metaData?.id || ""} />

     </div>
     <div className="col-span-4 p-3 ">
       <ProductUpload metaData={metaData} />
     </div>
   </div>
    </>
   
  );
};

export default ProductPage;
