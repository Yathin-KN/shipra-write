const DropdownItem = require('../schemas/dropdown1');

const getAllDropdownItems = async (req, res) => {
  try {
    const allDropdownItems = await DropdownItem.find();
    res.status(200).json({ allDropdownItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDropdownItemsAsFunction = async () => {
  try {
    const allDropdownItems = await DropdownItem.find();
    console.log("--------------->",allDropdownItems)
    return {allDropdownItems};
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = { getAllDropdownItems , getDropdownItemsAsFunction };
