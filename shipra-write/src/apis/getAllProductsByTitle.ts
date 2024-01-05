import axios from 'axios';

interface ProductDetail {
  productUrl: string;
  productTitle: string;
}

interface Product {
  title: string;
  products: ProductDetail[];
}

const getProductsByTitle = async (title: string): Promise<Product | null> => {
  try {
    const response = await axios.get<Product>(`https://shipra-backend.vercel.app/renderProductsAPI/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving products by title:', error);
    return null;
  }
};

export default getProductsByTitle;
