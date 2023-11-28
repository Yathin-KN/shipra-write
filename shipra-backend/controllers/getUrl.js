require("dotenv").config();
const { uploadFile } = require("./../middleware/s3");

const  getUrl = async (req, res) => {
  try {
    // const { username, email, password } = req.body;
    const file = req.file;
    let result;
    if (file) {
      result = await uploadFile(file);
    } else {
      result = " "; 
    }
    res.status(201).json({
      message: "URL created successfully",
      url: result.Location,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  getUrl,
};
