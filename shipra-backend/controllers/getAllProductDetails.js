const Product = require("../schemas/products");

const getAllProjectDetails = async (req, res) => {
  try {
    const projects = await Product.find({}, {
      postDetails: 1,
      post_id: 1,
      content: 1,
    });

    if (projects.length === 0) {
      return res.status(404).json({
        message: "No posts in the database"
      });
    }

    const details = projects.map((project) => {
      let postImage = '';

      const imageContent = project.content.find(item => item?.type === 'Image');
      if (imageContent) {
        postImage = imageContent.content.imageUrl;
      }

      return {
        post_id: project.post_id,
        postDetails: {
          postTitle: project.postDetails.postTitle,
          postImage: postImage
        }
      };
    });

    res.status(200).json(details);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

module.exports = {
  getAllProjectDetails
};
