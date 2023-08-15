import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { finalizeYoutubeAuth } from '../../services/apis';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const YoutubeConnection = () => {
  const router = useRouter();
  const { tempid } = router.query;
  const uid = Cookies.get('uid');

  const finalizeYoutube = async () => {
    try {
      await finalizeYoutubeAuth(tempid, uid);
      router.push('/onboarding?stage=4');
    } catch (error) {
      toast.error('Something went wrong');
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
