import { Link } from "react-router-dom";

const Main_page = () => {
  return (
    <div className="flex  items-center gap-8 h-screen  flex-wrap w-screen  justify-center">
    <div className='flex flex-col'>
    <img src="https://6596b5a88f29e103c1024276--cool-macaron-1a73d4.netlify.app/images/Shipra_logo.svg" className="fixed top-4 left-4"></img>

    <div className='flex w-full gap-10'>
      
      <Link to={"/blog"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
          <div className="relative cursor-pointer">
            <img
              src="https://www.buildjahaan.com/public/images/girl-image.png"
              alt="Blog"
              className="w-full h-72 object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Blog</h2>
            </div>
          </div>
        </Link>
  
        <Link to={"/product"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
          <div className="relative">
            <img
              src="https://blog.hubspot.com/hs-fs/hubfs/what-is-a-blog-3.webp?width=595&height=400&name=what-is-a-blog-3.webp"
              alt="Product"
              className="w-full h-72 aspect-square object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Product</h2>
            </div>
          </div>
        </Link>
  
        <Link to={"/project"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale  hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer" >
          <div className="relative">
            <img
              src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg"
              alt="Project"
              className="w-full h-72 object-cover  aspect-square"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Project</h2>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Main_page;