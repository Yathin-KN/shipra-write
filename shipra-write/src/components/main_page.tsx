import { Link } from "react-router-dom";
import Project from "./../assets/project.jpg"
import Post from "./../assets/post-img.jpeg"
import Product from "./../assets/product.png"
import ShipraLogo from "./../assets/Shipra_logo.svg"

const Main_page = () => {
  return (
    <div className="flex  items-center gap-8 h-screen  flex-wrap w-screen  justify-center">
    <div className='flex flex-col'>
    <img src={ShipraLogo} className="h-[3rem] my-3"></img>

    <div className='flex flex-col  md:flex-row w-full gap-10 py-4'>
      
      <Link to={"/blog"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
          <div className="relative cursor-pointer">
            <img
              src={Post}
              alt="Blog"
              className="w-full h-72 object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-md  py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Blog</h2>
            </div>
          </div>
        </Link>
  
        <Link to={"/product"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
          <div className="relative">
            <img
              src={Product}
              alt="Product"
              className="w-full h-72 aspect-square object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-md  py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Product</h2>
            </div>
          </div>
        </Link>
  
        <Link to={"/project"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale  hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer" >
          <div className="relative">
            <img
              src={Project}
              alt="Project"
              className="w-full h-72 object-cover  aspect-square"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-md  py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Project</h2>
            </div>
          </div>
        </Link>
       
      </div>
      </div>
    </div>
  )
}

export default Main_page;
