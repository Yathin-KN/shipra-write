const Video=require("../schemas/video")

const createVideo = async (req, res) => {
  const videos = req.body.map((videoData) => {
    return new Video({
      title: videoData.title,
      videoUrl: videoData.videoUrl,
    });
  });

  try {
    await Video.deleteMany({});
    const newVideos = await Video.insertMany(videos);
    res.status(201).json(newVideos);
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