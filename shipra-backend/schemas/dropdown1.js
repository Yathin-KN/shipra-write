const mongoose = require('mongoose');

const dropdownItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subcategories: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

const DropdownItem = mongoose.model('DropdownItem', dropdownItemSchema);

module.exports = DropdownItem;
