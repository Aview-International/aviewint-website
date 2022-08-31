import axios from 'axios';

export default async function handler(req, res) {
  const response = await axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_ENDPOINT}`,
    data: req.body,
    headers: {
      appId: process.env.NEXT_PUBLIC_APPID,
      appToken: process.env.NEXT_PUBLIC_APPTOKEN,
    },
  });

  return res.status(201).json(response.data);
}
