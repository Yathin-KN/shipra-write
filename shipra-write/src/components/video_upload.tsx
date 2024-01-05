import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'zod';

interface VideoData {
  title: string;
  videoUrl: string;
}

const Video = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [videosArray, setVideosArray] = useState<VideoData[]>([]);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setVideo(selectedFile);
    }
  };

  const handleFinalUpload = async (values: { title: string }) => {
    try {
      if (!video || !values.title) return;

      const formData = new FormData();
      formData.append('media', video);

      // Replace the following line with your actual API endpoint for uploading videos
      // const response = await axios.post('YOUR_API_ENDPOINT', formData);

      const publicUrl = "https://www.youtube.com/watch?v=yJg-Y5byMMw&t=1s"; // Replace with response.data.publicUrl
      setUploadedUrl(publicUrl);

      const newVideo: VideoData = { title: values.title, videoUrl: publicUrl };
      setVideosArray([...videosArray, newVideo]);
      setVideo(null);
    } catch (error) {
      console.error('Error uploading the video:', error);
    }
  };

  // Zod validation schema
  const videoSchema = object({
    title: string().min(1),
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 my-8 flex justify-center items-center">
        <h2 className="text-2xl mb-4">Uploaded Videos</h2>
        <div className="grid grid-cols-3 gap-4">
          {videosArray.map((video, index) => (
            <div key={index} className="border rounded-md p-4">
              <p className="font-semibold">{video.title}</p>
              <video controls className="mt-2" style={{ width: '100%' }}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-11/12 my-8 ">
        <h2 className="text-2xl mb-4">Upload New Video</h2>
        <Formik
          initialValues={{ title: '' }}
          validationSchema={videoSchema}
          onSubmit={(values: { title: string; }, actions: { resetForm: () => void; }) => {
            handleFinalUpload(values);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type="file" name="video" onChange={handleVideoChange} accept="video/*" className="mb-4" />
              <ErrorMessage name="video" component="div" className="text-red-500" />
              <Field type="text" name="title" placeholder="Enter video title" className="mb-4 p-2" />
              {errors.title && touched.title && <div className="text-red-500">{errors.title}</div>}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
                Save
              </button>
              {uploadedUrl && (
                <div className="mb-4">
                  <p className="font-semibold">Title: </p>
                  <p>Uploaded URL: {uploadedUrl}</p>
                </div>
              )}
              {videosArray.length > 0 && (
                <div>
                  <button type="button" onClick={() => setVideosArray([])} className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Clear All
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Video;
