import axios from 'axios';

export default async function handler(req, res) {
  const { get } = req.query;
  if (get === 'short_lived_access') {
    // get one time access code
    const { code } = req.body;
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://api.instagram.com/oauth/access_token',
        data: {
          client_id: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
          client_secret: process.env.NEXT_PUBLIC_INSTAGRAM_SECRET_KEY,
          grant_type: 'authorization_code',
          redirect_uri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL,
          code: code,
        },
        headers: {
          'content-type': 'multipart/form-data',
        },
      });
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ message: 'Error getting access code' });
    }
  } else if (get === 'long_lived_access') {
    try {
      // exchange one time access token for long_lived_access_token
      const { code } = req.body;
      const response = await axios.get(
        `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.NEXT_PUBLIC_INSTAGRAM_SECRET_KEY}&access_token=${code}`
      );
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ message: 'Error connecting to instagram' });
    }
  } else if (get === 'user_account_info') {
    try {
      // get user account info
      const { code } = req.body;
      const response = await axios(
        `https://graph.instagram.com/v15.0/me?fields=id,username,account_type&access_token=${code}`
      );
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ message: 'Error connecting to instagram' });
    }
  }
}
