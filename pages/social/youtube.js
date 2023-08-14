import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { finalizeYoutubeAuth } from '../../services/apis';
import { toast } from 'react-toastify';

const YoutubeConnection = () => {
  const router = useRouter();
  const { tempid } = router.query;

  const finalizeYoutube = async (userId) => {
    try {
      await finalizeYoutubeAuth(tempid, userId);
      router.push('/onboarding?stage=4');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (tempid && userId) finalizeYoutube(userId);
  }, [tempid]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default YoutubeConnection;
