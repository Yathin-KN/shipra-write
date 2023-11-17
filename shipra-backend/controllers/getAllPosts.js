const Post = require('./../schemas/post');


const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    
    const postsWithUserInfo = await Promise.all(posts.map(async (post) => {
   
      
      let postImage = post.postDetails.postImage;
    
      const imageContent = post.content.find(item => item?.type === 'Image');
      if (imageContent) {
        postImage = imageContent.content.imageUrl;
      }
    
      return {
        ...post.toObject(), 
        postImage,  
     
      };
    }));
    

    res.status(200).json(postsWithUserInfo);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllPosts,
};
