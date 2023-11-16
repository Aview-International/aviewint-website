import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { finalizeYoutubeAuth } from '../../services/apis';
import Cookies from 'js-cookie';
import ErrorHandler from '../../utils/errorHandler';

const YoutubeConnection = () => {
  const router = useRouter();
  const { tempid } = router.query;
  const uid = Cookies.get('uid');

  const finalizeYoutube = async () => {
    try {
      await finalizeYoutubeAuth(tempid, uid);
      router.push('/onboarding?stage=3');
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    if (tempid && uid) finalizeYoutube();
  }, [tempid, uid]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default YoutubeConnection;
