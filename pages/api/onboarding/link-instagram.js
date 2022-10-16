import axios from 'axios';
import FormData from 'form-data';

export default async function handler(req, res) {
  const form = new FormData();
  form.append('client_id', process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID);
  form.append('client_secret', process.env.NEXT_PUBLIC_INSTAGRAM_SECRET_KEY);
  form.append('grant_type', 'authorization_code');
  form.append('redirect_uri', process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL);
  form.append('code', localStorage.getItem('ig_access_code'));

  const response = await axios.post(
    'https://api.instagram.com/oauth/access_token',
    form,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  console.log(response);
  res.status(201).json(response);
}
