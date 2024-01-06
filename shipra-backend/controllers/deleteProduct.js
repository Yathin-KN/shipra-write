const MainTitleWithSubcategoriesModel = require('../schemas/productPage');

const deleteProduct = async (req, res) => {
  const { titleId, productId } = req.params;

  try {
    const product = await MainTitleWithSubcategoriesModel.findById(titleId);

    if (!product) {
      return res.status(404).json({ message: 'Title not found' });
    }

    const updatedProducts = product.products.filter(
      (item) => item._id.toString() !== productId
    );

    if (updatedProducts.length === product.products.length) {
      return res.status(404).json({ message: 'Product not found for this Title' });
    }

    product.products = updatedProducts;
    await product.save();

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
};

module.exports = {
  deleteProduct,
};
