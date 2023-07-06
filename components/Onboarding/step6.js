import { useRouter } from 'next/router';
import { onBoardingRecommends } from '../../constants/constants';
import OnboardingButton from './button';
import Button from '../UI/Button';
import Image from 'next/image';

const OnboardingStep6 = () => {
  const router = useRouter();

  const handleSubmit = async () => {
    router.push('/onboarding?stage=7');
  };

  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Received recommended languages
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:mx-auto md:w-2/5 md:text-center md:text-xl">
        We recommend you translate for these languages. Feel free to edit the
        list as you please!
      </p>
      <div className="mx-auto grid w-full gap-2 md:w-[1112px] md:grid-cols-3">
        {onBoardingRecommends.map((recommendationItem, index) => (
          <div
            className="min-w-max(320px,360px) gradient-dark flex h-[61px] flex-row justify-between p-s1.5"
            key={index}
          >
            <div className="flex flex-row justify-between">
              <Image src={logan} alt="profile-image" height={40} width={40} />
              <div className="ml-3 flex flex-col">
                <h2 className="text-lg">
                  Logan Paul {recommendationItem.language}
                </h2>
                <p className="text-sm">Youtube</p>
              </div>
            </div>
            <Image src={trash} alt="trash" width={24} height={24} />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        <div className="m-auto w-[min(360px,90%)]">
          <OnboardingButton onClick={handleSubmit} isLoading="" theme="dark">
            Continue
          </OnboardingButton>
        </div>
        <div className="m-auto w-[min(360px,90%)]">
          <Button type="tertiary" fullWidth={true}>
            Add another language
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep6;
