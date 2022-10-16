import axios from 'axios';

export const InstagramAuthenticationLink = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`;

export const GetAccessToken = async () => {
  try {
    const res = await axios('/api/onboarding/link-instagram');
    console.log(res);
  } catch (error) {
    conosle.log(error);
  }
};
