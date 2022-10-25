import axios from 'axios';

export default async function getYoutubeData(req, res) {
  const { get } = req.query;
  // get user channel id
  if (get === 'channel') {
    const { token } = req.body;
    try {
      const response = await axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/channels?&mine=true`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  // get videos from above channel
  if (get === 'videos') {
    const { token } = req.body;
    const apikey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    try {
      const response = await axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?forMine=true&part=snippet&type=video&order=date&maxResults=30&key=${apikey}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
