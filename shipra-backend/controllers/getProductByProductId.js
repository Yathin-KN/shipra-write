const Product = require('./../schemas/products');
const getProductById = async (req, res) => {
    try {
      const postId = req.params.post_id;
      const post = await Product.findOne({ post_id: postId });
  
      if (!post) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const postWithUserInfo = {
        ...post.toObject(),
      };
  
      res.status(200).json(postWithUserInfo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };

module.exports = {
    getProductById
};
  