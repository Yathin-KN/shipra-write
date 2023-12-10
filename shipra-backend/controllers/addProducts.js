const Product= require("./../schemas/products")

const addProduct = async (req, res) => {
  try {
    var { postDetails, content } = req.body;
    console.log({postDetails, content})
    var filteredContent = content.filter(item => item !== null);
    content=filteredContent;
   
    const newPost = new Product({
      postDetails,
      content,
    });

    await newPost.save();

    res.status(201).json({ message: 'product created successfully', post_id: newPost.post_id });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  addProduct,
};
