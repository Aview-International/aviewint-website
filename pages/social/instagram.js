import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { completeIgConnection } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';

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
          await completeIgConnection(code, uid);
          Cookies.remove('instagramRedirect');
          if (igRdr) return router.push(igRdr);
        } catch (error) {
          ErrorHandler(error);
        }
        router.push('/onboarding?stage=2');
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
