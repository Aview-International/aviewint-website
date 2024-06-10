import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { completeTikTokAuth } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';

const TikTokConnection = () => {
  const router = useRouter();
  const { code, state } = router.query;

  useEffect(() => {
    if (code) {
      (async () => {
        try {
          await completeTikTokAuth({ code, state });
          router.push('/onboarding?stage=3');
        } catch (error) {
          ErrorHandler(error);
          router.push('/onboarding?stage=3');
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

export default TikTokConnection;
