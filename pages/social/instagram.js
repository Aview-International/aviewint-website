import axios from 'axios';
import { useEffect } from 'react';
import { updateUserInstagram } from '../api/firebase';
import { useRouter } from 'next/router';

const InstagramConnect = () => {
  const router = useRouter();
  const getInstagramToken = async (ig_access_code) => {
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
      // add current time to expiry date
      const current_milliseconds = new Date().getTime();
      const time = getToken.data.expires_in * 1000;
      const new_expiry_time = +current_milliseconds + time;

      // save all neccessary info to the database
      await updateUserInstagram(
        Cookies.get('uid'),
        getUserProfile.data.username,
        getUserProfile.data.id,
        getUserProfile.data.account_type,
        getToken.data.access_token,
        new_expiry_time
      );
      setIsLoading({ ...isLoading, instagram: false });
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    const { ig_access_code } = router.query;
    if (ig_access_code) getInstagramToken(ig_access_code);
  }, []);

  return;
};

export default InstagramConnect;
