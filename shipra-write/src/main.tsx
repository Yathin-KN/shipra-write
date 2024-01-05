import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product_page from './components/product_page.tsx';
import Video from './components/video_upload.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/product",
    element:<Product_page/>
  },{
    path:"/video_cards",
    element:<Video/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
     <RouterProvider router={router} />
  ,
)
