import axios from 'axios';

const uploadVideo = async (data, setProgress) => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:4000/user/upload-videos',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    data: data,
    onUploadProgress: (progressEvent) =>
      setProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      ),
  });
  return response;
};

export default uploadVideo;

