import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(
      'https://drive.google.com/file/d/1afrmOmR1LnXy7zFx8TxpnN0WpusvB2Qx/view?usp=sharing'
    );
  }, []);
  return;
};

export default PrivacyPolicy;
