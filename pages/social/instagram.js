import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { completeIgConnection } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { authCustomUser, getUserProfile } from '../../services/firebase';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const uid = Cookies.get('uid');
  const igRdr = Cookies.get('instagramRedirect');

  useEffect(() => {
    if (code) {
      (async () => {
        // get short lived acces token
        try {
          const testUser = Cookies.get('testUser');
          if (testUser) {
            await authCustomUser(
              Cookies.get('session'),
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
            return router.push('/onboarding?stage=3');
          }
          await completeIgConnection(code, uid);
          Cookies.remove('instagramRedirect');
          if (igRdr) router.push(igRdr);
          else router.push('/onboarding?stage=3');
        } catch (error) {
          ErrorHandler(error);
        }
      })();
    }
  }, [code]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default InstagramConnection;
