import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { APP_ENVIRONMENT } from '../../constants/constants';

const InstagramConnection = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code)
      window.location.href = `${APP_ENVIRONMENT.dev}/social/instagram?code=${code}`;
  }, [code]);

  return (
    <div className="h-screen w-screen bg-black">
      <p className="text-xl text-white">Please wait</p>
    </div>
  );
};

export default InstagramConnection;
