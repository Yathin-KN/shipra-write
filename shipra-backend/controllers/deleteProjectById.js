const Product = require("../schemas/products");

const deleteProjectByPostId = async (req, res) => {
  const { project_id } = req.params; 

  try {
    const deletedProject = await Product.findOneAndDelete({ post_id:project_id });

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully", deletedProject });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {deleteProjectByPostId};
