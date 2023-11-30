import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { completeIgConnection } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;
  const uid = Cookies.get('uid');

  useEffect(() => {
    if (code) {
      (async (ig_access_code, path) => {
        // get short lived acces token
        try {
          await completeIgConnection(ig_access_code, uid);
          router.push('/onboarding?stage=3');
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
