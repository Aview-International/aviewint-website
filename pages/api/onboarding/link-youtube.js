import axios from 'axios';

export default async function getYoutubeData(req, res) {
  const { get } = req.query;

  // get user channel id
  if (get === 'channel') {
    const { token } = req.body;
    try {
      const response = await axios({
        method: 'GET',
        url: `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&mine=true`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
      // return res.status(500).json({  message: 'Error getting channel' });
    }
  }

  // get videos from above channel
  if (get === 'videos') {
    const apikey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const { youtubeChannelId } = req.body;
    try {
      const response = await axios({
        method: 'GET',
        url: `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU${youtubeChannelId.substring(
          2
        )}&key=${apikey}`,
      });
      return res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error getting videos' });
    }
  }
}
