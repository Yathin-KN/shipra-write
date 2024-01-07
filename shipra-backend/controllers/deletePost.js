const Post = require("../schemas/post");

const deletePostByPostId = async (req, res) => {
  const { post_id } = req.params; 

  try {
    const deletedPost = await Post.findOneAndDelete({ post_id });

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {deletePostByPostId};
