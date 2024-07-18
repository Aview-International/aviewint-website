import Button from '../../UI/Button';

const SubscriptionInfo = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-white">
      <p className="mb-4 text-3xl">Your subscription was successful</p>
      <Button purpose="route" route="/dashboard">
        Go to Dashboard
      </Button>
    </div>
  );
};

export default SubscriptionInfo;
