import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { completeTikTokAuth } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { APP_ENVIRONMENT } from '../../constants/constants';
import Cookies from 'js-cookie';

const TikTokConnection = () => {
  const router = useRouter();
  const { code, state } = router.query;

  useEffect(() => {
    if (code) {
      (async () => {
        try {
          const page = `/social/tiktok?code=${code}&state=${state}`;
          const env = state.split(',')[0];

          let origin = window.location.origin;
          if (origin !== APP_ENVIRONMENT[env]) {
            window.location.href = APP_ENVIRONMENT[env] + page;
            return;
          }
          await completeTikTokAuth({ code, state });
          const rdr = Cookies.get('tiktokRdr');
          if (rdr) {
            Cookies.remove('tiktokRdr');
            router.push(rdr);
            return;
          }
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

export default TikTokConnection;
