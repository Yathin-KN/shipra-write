const MainTitleWithSubcategoriesModel = require('../schemas/productPage');

const createNewProduct = async (req, res) => {
  try {
    const { title, products } = req.body;
    
    const existingData = await MainTitleWithSubcategoriesModel.findOne({ title });

    if (existingData) {
      const updatedData = await MainTitleWithSubcategoriesModel.findOneAndUpdate(
        { title },
        { products },
        { new: true }
      );
      res.status(200).json(updatedData);
    } else {
      const newData = await MainTitleWithSubcategoriesModel.create({ title, products });
      res.status(201).json(newData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createNewProduct };
