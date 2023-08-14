import { useEffect } from 'react';
import { updateRequiredServices } from '../api/firebase';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {
  getInstagramLongLivedAccess,
  getInstagramProfile,
  getInstagramShortAccess,
} from '../../services/apis';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const uid = Cookies.get('uid');
  const getInstagramToken = async (ig_access_code) => {
    // get short lived acces token
    try {
      const response = await getInstagramShortAccess(ig_access_code);
      // get long lived token
      const getToken = await getInstagramLongLivedAccess(
        response.data.access_token
      );
      // get user instagram data
      const getUserProfile = await getInstagramProfile(
        getToken.data.access_token
      );

      // save all neccessary info to the database
      await updateRequiredServices(
        {
          instagram_username: getUserProfile.data.username,
          instagram_account_id: getUserProfile.data.id,
          instagram_account_type: getUserProfile.data.account_type,
          instagram_access_token: getToken.data.access_token,
          instagram_access_token_expiry: getToken.data.expires_in,
        },
        uid
      );
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

export default InstagramConnection;
