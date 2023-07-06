import { useRouter } from 'next/router';
import { useState } from 'react';
import { ONBOARDING_REGIONS } from '../../constants/constants';
import OnboardingButton from './button';
import Image from 'next/image';
import { updateRequiredServices } from '../../pages/api/firebase';
import Cookies from 'js-cookie';

const OnboardingStep5 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    region: [],
    languages: [],
  });

  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  const handleSelect = (option) => {
    // set selected regions and languages
    const selectedRegion = [...payload.region];
    const selectedLanguages = [];
    if (selectedRegion.includes(option))
      selectedRegion.splice(selectedRegion.indexOf(option), 1);
    else selectedRegion.push(option);

    const selectedOption = ONBOARDING_REGIONS.filter((region) =>
      selectedRegion.includes(region.title)
    );

    selectedOption.forEach((opt) =>
      opt.data.forEach((el) => {
        if (!selectedLanguages.includes(el.languageName))
          selectedLanguages.push(el.languageName);
      })
    );

    setPayload({ languages: selectedLanguages, region: selectedRegion });
  };

  const handleSubmit = async () => {
    setSideEffects({
      hasSubmitted: true,
      isLoading: true,
    });

    try {
      if (payload.region.length < 1) {
        setSideEffects({ ...sideEffects, isLoading: false });
        return;
      }
      await updateRequiredServices(payload, Cookies.get('uid'));
    } catch (error) {
      console.log(error);
    }
    router.push('/onboarding?stage=6');
  };

  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Select by regions of the world
      </h2>
      <p className="mx-auto mt-s2 mb-s4 text-lg md:w-2/5 md:text-center md:text-xl ">
        Select region based on your location. So we can suggest which languages
        you should translate for.{' '}
        <span className="ml-1 underline hover:cursor-pointer">Why?</span>
      </p>
      <div className="grid items-center justify-center gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ONBOARDING_REGIONS.map((item, index) => (
          <div key={`option-${index}`} onClick={() => handleSelect(item.title)}>
            <div className={`flex flex-col items-center`}>
              <h2 className="mb-4 text-4xl font-semibold">{item.title}</h2>
              <div
                className={`h-full w-full cursor-pointer rounded-2xl p-s1 text-center md:h-[332px] md:w-[283px] ${
                  payload.region.includes(item.title)
                    ? 'gradient-1'
                    : 'gradient-dark'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={235}
                  height={303}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="my-6 text-2xl font-semibold">Languages</h2>
                <div
                  className={`flex h-full w-full cursor-pointer flex-col items-start gap-x-4 gap-y-5 rounded-2xl p-s3 md:h-[247px] md:w-[283px] ${
                    payload.region.includes(item.title)
                      ? 'gradient-1'
                      : 'gradient-dark'
                  }`}
                >
                  {item.data.map((dataItem, index) => (
                    <div
                      className="flex items-center justify-center"
                      key={index}
                    >
                      <Image
                        src={dataItem.image}
                        alt={dataItem.languageName}
                        width={24}
                        height={22}
                      />
                      <p className="ml-2 text-lg font-medium">
                        {dataItem.languageName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {sideEffects.hasSubmitted && (
        <p className="my-s3 text-center text-xl">
          Please select an option from above to move to next step.
        </p>
      )}
      <div className="m-auto mt-12 w-[min(360px,90%)]">
        <OnboardingButton
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
          theme="dark"
        >
          Proceed
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingStep5;
