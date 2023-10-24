import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SUPPORTED_REGIONS } from '../../constants/constants';
import OnboardingButton from './button';
import Image from 'next/image';
import { updateRequiredServices } from '../../pages/api/firebase';
import Cookies from 'js-cookie';
import ErrorHandler from '../../utils/errorHandler';

const OnboardingStep5 = ({ userData }) => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    region: [],
    languages: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPayload({
      region: userData.region,
      languages: userData.languages,
    });
  }, [userData]);

  const handleSelect = (option) => {
    // set selected regions and languages
    const selectedRegion = [...payload.region];
    const selectedLanguages = [];
    if (selectedRegion.includes(option))
      selectedRegion.splice(selectedRegion.indexOf(option), 1);
    else selectedRegion.push(option);

    const selectedOption = SUPPORTED_REGIONS.filter((region) =>
      selectedRegion.includes(region.title)
    );

    selectedOption?.forEach((opt) =>
      opt.data.forEach((el) => {
        if (!selectedLanguages.includes(el.languageName))
          selectedLanguages.push(el.languageName);
      })
    );

    setPayload({ languages: selectedLanguages, region: selectedRegion });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await updateRequiredServices(payload, Cookies.get('uid'));
    } catch (error) {
      ErrorHandler(error);
    }
    router.push('/onboarding?stage=5');
  };

  return (
    <div className="m-auto w-[90%] 2xl:w-[80%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Select by regions of the world
      </h2>
      <p className="mx-auto mt-s2 mb-s4 text-lg md:w-2/5 md:text-center md:text-xl ">
        Select region based on your location. So we can suggest which languages
        you should translate for.
      </p>
      <div className="grid items-center justify-center gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SUPPORTED_REGIONS.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center`}
            onClick={() => handleSelect(item.title)}
          >
            <h2 className="mb-4 text-4xl font-semibold">{item.title}</h2>
            <div
              className={`relative h-full w-full cursor-pointer rounded-2xl bg-black p-s1 text-center md:h-[332px] md:w-[283px] ${
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
              <div
                className={`gradient-1 transition-300 absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 blur-[8px] group-hover:opacity-60`}
              ></div>
            </div>
            <div>
              <h2 className="my-6 ml-2 text-2xl font-semibold">Languages</h2>
              <div
                className={`relative h-full w-full cursor-pointer rounded-2xl bg-black p-s1.5 md:h-[247px] md:w-[283px] md:p-s3 ${
                  payload.region.includes(item.title)
                    ? 'gradient-1'
                    : 'gradient-dark'
                }`}
              >
                <div
                  className={`gradient-1 transition-300 absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 blur-[8px] group-hover:opacity-60`}
                ></div>
                <div className="flex h-full w-full flex-col items-start gap-x-4 gap-y-5 overflow-y-auto">
                  {item.data.map((dataItem, index) => (
                    <div
                      className="flex items-center justify-center gap-x-[6px]"
                      key={index}
                    >
                      <Image
                        src={dataItem.image}
                        alt={dataItem.languageName}
                        width={24}
                        height={22}
                      />
                      <p className="text-lg font-medium">
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

      <div className="m-auto mt-12 w-[min(360px,90%)]">
        <OnboardingButton
          disabled={payload.region.length < 1}
          onClick={handleSubmit}
          isLoading={isLoading}
          theme="light"
        >
          Proceed
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingStep5;
