const Video=require("../schemas/video")

const getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};


const getVideosFE = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (err) {
    console.error('Error fetching videos:', err.message);
    return [];
  }
};

module.exports = {
    getVideos,
    getVideosFE
  };