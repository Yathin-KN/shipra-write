const Video = require('../schemas/video');

const deleteVideo = async (req, res) => {
  const videoId = req.params.id;

  try {
    const deletedVideo = await Video.findByIdAndDelete(videoId);
    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully', deletedVideo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { deleteVideo };
