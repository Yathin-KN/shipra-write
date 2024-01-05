const MainTitleWithSubcategoriesModel = require('../schemas/productPage');

const getAllNewProducts = async () => {
  try {
    const products = await MainTitleWithSubcategoriesModel.find();
    return products;
  } catch (error) {
    console.error('Error retrieving products:', error);
    return [];
  }
};


const getAllNewProductsAPI = async (req, res) => {
    const { title } = req.params;
    try {
      const product = await MainTitleWithSubcategoriesModel.findOne({ title });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).json({ message: 'Failed to retrieve product' });
    }
  };



module.exports = { getAllNewProducts , getAllNewProductsAPI };
