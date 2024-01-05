const Video=require("../schemas/video")

const getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getVideos,
  };