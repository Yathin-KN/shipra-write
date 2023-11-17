const Post = require("./../schemas/post")
// const Category = require("./../../schemas/category"); 

const addPost = async (req, res) => {
  try {
    var { postDetails, content } = req.body;
    console.log({postDetails, content})
    var filteredContent = content.filter(item => item !== null);
    content=filteredContent;
   
    const newPost = new Post({
      postDetails,
      content,
    });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post_id: newPost.post_id });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  addPost,
};
