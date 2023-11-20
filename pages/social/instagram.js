import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {
  getInstagramLongLivedAccess,
  getInstagramProfile,
  getInstagramShortAccess,
} from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { updateRequiredServices } from '../api/firebase';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const uid = Cookies.get('uid');
  const getInstagramToken = async (ig_access_code, path) => {
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
          instagram: {
            instagram_username: getUserProfile.data.username,
            instagram_account_id: getUserProfile.data.id,
            instagram_account_type: getUserProfile.data.account_type,
            instagram_access_token: getToken.data.access_token,
            instagram_access_token_expiry: getToken.data.expires_in,
            instagramConnected: true,
          },
        },
        uid
      );
      localStorage.removeItem('instagramRedirect');

      router.push(path);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    const rdr = localStorage.getItem('instagramRedirect');
    if (code) {
      if (rdr) getInstagramToken(code, rdr);
      else getInstagramToken(code, '/onboarding?stage=3');
    }
  }, [code]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default InstagramConnection;
