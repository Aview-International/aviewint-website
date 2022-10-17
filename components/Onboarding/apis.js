import axios from 'axios';
import FormData from 'form-data';

export const InstagramAuthenticationLink = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`;

// export const getAccessToken = async () => {
//   const code = localStorage.getItem('ig_access_code');
//   console.log(code);
//   await axios.post('/api/onboarding/link-instagram', code);
//   return res;
// };
