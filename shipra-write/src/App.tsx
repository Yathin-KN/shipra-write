import {useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signIn} from './apis/signIn';
//hrllo
import {  useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ShipraLogo from "./assets/Shipra_logo.svg"
// const ProductPost = ({ onCardClick }:{onCardClick:any}) => {
//   const handleClick = (type:any) => {
//     onCardClick(type);
//   };

//   return (
//     <div className="flex  items-center gap-8 h-screen  flex-wrap">
//     <div className='flex flex-col'>
//     <img src="https://6596b5a88f29e103c1024276--cool-macaron-1a73d4.netlify.app/images/Shipra_logo.svg" className="fixed top-4 left-4"></img>

//     <div className='flex w-full gap-10'>
      
//       <div className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
//           <div className="relative cursor-pointer" onClick={() => handleClick('post')}>
//             <img
//               src="https://www.buildjahaan.com/public/images/girl-image.png"
//               alt="Blog"
//               className="w-full h-72 object-cover "
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Blog</h2>
//             </div>
//           </div>
//         </div>
  
//         <Link to={"/product"} className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out">
//           <div className="relative">
//             <img
//               src="https://blog.hubspot.com/hs-fs/hubfs/what-is-a-blog-3.webp?width=595&height=400&name=what-is-a-blog-3.webp"
//               alt="Product"
//               className="w-full h-72 aspect-square object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Product</h2>
//             </div>
//           </div>
//         </Link>
  
//         <div className="max-w-xs bg-gray-200 rounded-lg shadow-sm filter grayscale  hover:filter-none hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleClick('project')}>
//           <div className="relative">
//             <img
//               src="https://www.projectmanager.com/wp-content/uploads/2021/10/211014_Blog_Feature_Project_Environment-scaled.jpg"
//               alt="Project"
//               className="w-full h-72 object-cover  aspect-square"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h2 className="text-white text-lg font-semibold py-1 px-3 rounded-full bg-black backdrop-opacity-40 w-[100px] text-center">Project</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
    
      
//   );
// };

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const navigate=useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please provide both email and password.');
      return;
    }

    try {
      setIsLoading(true)
      const success = await signIn(email, password);

      if (success) {
        toast.success('Login successful!');
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
      navigate("/home")
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Login error:', error);
    }finally{
      setIsLoading(false)
    }
  };

  
    return <>
     <div className="h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
        <img src={ShipraLogo} className="fixed top-4 left-4"></img>

            <h2 className="text-center text-3xl font-bold ">Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
                className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
              >
               {isLoading &&  <Loader2 className='animate-spin text-md mx-2'/>}
                Login
              </button>
            </div>
          </form>
        </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
    </>
  
}

export default App;
