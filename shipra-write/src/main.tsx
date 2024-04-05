import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product_page from "./components/product_page.tsx";
import Main_page from "./components/main_page.tsx";
import Blog from "./components/Blog.tsx";
import Project from "./components/Project.tsx";
import { useEffect, useState } from "react";
import verifyAuthorization from "./apis/authorize.ts";

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    verifyAuthorization()
      .then((response) => {
        setIsAuthorized(response.status === 200);
      })
      .catch((error) => {
        console.error(error);
        setIsAuthorized(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Authenticating</div>;
  }

  return isAuthorized ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/product" element={<ProtectedRoute element={<Product_page />}  />} />
    <Route path="/home" element={<ProtectedRoute element={<Main_page />}  />} />
    <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />
    <Route path="/project" element={<ProtectedRoute element={<Project />}  />} />
  </Routes>
</BrowserRouter>
);
