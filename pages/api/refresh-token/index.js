import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://securetoken.googleapis.com/v1/token?key=${NEXT_PUBLIC_FIREBASE_API_KEY}`,
      data: `grant_type=refresh_token&refresh_token=${req.body}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    res.status(201).json(response.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
