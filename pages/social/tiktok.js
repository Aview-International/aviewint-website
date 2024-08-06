import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { completeTikTokAuth } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { APP_ENVIRONMENT } from '../../constants/constants';

const TikTokConnection = () => {
  const router = useRouter();
  const { code, state } = router.query;
  const page = '/social/tiktok';

  useEffect(() => {
    if (code) {
      (async () => {
        try {
          const env = state.split(',')[0];

          let origin = window.location.origin;
          if (origin !== APP_ENVIRONMENT[env]) {
            window.location.href = APP_ENVIRONMENT[env] + page;
            return;
          }
          // if (env === 'dev' && origin !== APP_ENVIRONMENT.dev)
          //   return (window.location.href = APP_ENVIRONMENT.dev + page);
          // else if (env === 'beta' && origin !== APP_ENVIRONMENT.beta)
          //   return (window.location.href = APP_ENVIRONMENT.beta + page);
          // else if (env === 'prod' && origin !== APP_ENVIRONMENT.prod)
          //   return (window.location.href = APP_ENVIRONMENT.prod + page);
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
