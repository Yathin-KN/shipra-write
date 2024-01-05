const Video=require("../schemas/video")

const createVideo = async (req, res) => {
    const video = new Video({
      title: req.body.title,
      videoUrl: req.body.videoUrl
    });
  
    try {
      const newVideo = await video.save();
      res.status(201).json(newVideo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

const getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports={
    createVideo
}