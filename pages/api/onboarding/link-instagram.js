import axios from 'axios';

export default async function getAccessToken(req, res) {
  const { code } = req.body;
  // console.log(code);
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
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    const data = JSON.stringify(response.data);
    return res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
