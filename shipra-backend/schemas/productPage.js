const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  productUrl: String,
  productTitle: String,
});

const MainTitleWithSubcategories = new mongoose.Schema({
  title: String,
  products: [subcategorySchema],
});

const MainTitleWithSubcategoriesModel = mongoose.model('MainTitleWithSubcategories', MainTitleWithSubcategories);

module.exports = MainTitleWithSubcategoriesModel;
