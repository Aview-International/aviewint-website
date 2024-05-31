import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TikTokConnection = () => {
  const router = useRouter();
  const { code, state } = router.query;

  useEffect(() => {
    if (code) router.replace(`/social/tiktok?code=${code}&state=${state}`);
  }, [code]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default TikTokConnection;
