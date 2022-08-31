import axios from 'axios';

export default async function handler(req, res) {
  const response = await axios({
    method: 'POST',
    url: `${process.env.ENDPOINT}`,
    data: req.body,
    headers: {
      appId: process.env.APPID,
      appToken: process.env.APPTOKEN,
    },
  });
  return res.status(201).json(response.data);
}
