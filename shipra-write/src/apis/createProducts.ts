import axios from 'axios';

interface ProductDetail {
  productUrl: string;
  productTitle: string;
}

interface Product {
  title: string;
  products: ProductDetail[];
}

const createProduct = async (data: Product) => {
    try {
      const response = await axios.post<Product>('https://shipra-backend.vercel.app/createProduct', data);
      console.log('Product created:', response.data);
      return response.data;
    } catch (error:any) {
      console.error('Error creating product:', error);
      throw new Error(error.response?.data?.message || 'Failed to create product');
    }
};

export default createProduct;