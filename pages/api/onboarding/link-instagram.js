import axios from 'axios';

export default async function handler(req, res) {
  const { get } = req.query;
  if (get === 'videos') {
    // get user account videos
    try {
      const { access_token } = req.body;
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=media_type,media_url, thumbnail_url,timestamp,permalink,caption,is_shared_to_feed&access_token=${access_token}`
      );
      return res.status(200).json(response.data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Error fetching instagram media' });
    }
  }
}
