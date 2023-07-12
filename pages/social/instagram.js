import axios from 'axios';
import { useEffect } from 'react';
import { updateUserInstagram } from '../api/firebase';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const InstagramConnect = () => {
  const router = useRouter();
  const { code } = router.query;
  const getInstagramToken = async (ig_access_code) => {
    console.log(ig_access_code);
    // get short lived acces token
    try {
      const response = await axios.post(
        '/api/onboarding/link-instagram?get=short_lived_access',
        {
          code: ig_access_code,
        }
      );
      // get long lived token
      const getToken = await axios.post(
        '/api/onboarding/link-instagram?get=long_lived_access',
        {
          code: response.data.access_token,
        }
      );
      // get user instagram data
      const getUserProfile = await axios.post(
        '/api/onboarding/link-instagram?get=user_account_info',
        {
          code: getToken.data.access_token,
        }
      );

      // save all neccessary info to the database
      await updateUserInstagram({
        uid: Cookies.get('uid'),
        instagram_username: getUserProfile.data.username,
        instagram_account_id: getUserProfile.data.id,
        instagram_account_type: getUserProfile.data.account_type,
        instagram_access_token: getToken.data.access_token,
        instagram_access_token_expiry: getToken.data.expires_in,
      });
      router.push('/onboarding?stage=4');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) getInstagramToken(code);
  }, [code]);

  return;
};

export default InstagramConnect;
