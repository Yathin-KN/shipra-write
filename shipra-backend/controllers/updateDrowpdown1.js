const DropdownItem = require('../schemas/dropdown1');

const createOrUpdateDropdownItems = async (req, res) => {
  const requestData = req.body;

  try {
    const existingItem = await DropdownItem.findOne();

    if (existingItem) {
      await DropdownItem.deleteMany(); // Remove existing document
    }

    const dropdownItem = new DropdownItem({
      title: requestData.title,
      subcategories: requestData.subcategories, // Save entire subcategories from requestData
    });

    const createdItem = await dropdownItem.save();

    res.status(200).json({ createdItem, message: 'DropdownItem saved successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrUpdateDropdownItems };
