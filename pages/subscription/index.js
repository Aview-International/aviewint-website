import { useEffect } from 'react';
import Blobs from '../../components/UI/Blobs';
import Confetti from '../../components/UI/Confetti';
import SubscriptionInfo from '../../components/sections/subscription/info';
import { useRouter } from 'next/router';

const SubscriptionPage = () => {
  const { query, replace } = useRouter();

  useEffect(() => {
    console.log(query);
    if (
      query?.payment_intent &&
      query?.payment_intent_client_secret &&
      query?.redirect_status === 'succeeded'
    ) {
      replace('/subscription');
    }
  }, [query]);
  return (
    <>
      <Confetti />
      <SubscriptionInfo />
      <Blobs />
    </>
  );
};

export default SubscriptionPage;
