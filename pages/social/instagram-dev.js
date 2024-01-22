import { useEffect } from 'react';
import { useRouter } from 'next/router';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) router.replace(`/social/instagram?code=${code}`);
  }, [code]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default InstagramConnection;
