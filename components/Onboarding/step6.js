import { useRouter } from 'next/router';
import OnboardingButton from './button';
import Image from 'next/image';
import Trash from '../../public/img/icons/trash.svg';
import {
  CATEGORIES,
  LANGUAGES,
  SUPPORTED_REGIONS,
} from '../../constants/constants';
import { useEffect, useState } from 'react';
import { updateRequiredServices } from '../../pages/api/firebase';
import MultipleSelectInput from '../FormComponents/MultipleSelectInput';

const OnboardingStep6 = ({ userData }) => {
  const router = useRouter();
  const [languages, setLanguages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selectLanguages, setSelectLanguages] = useState(false);

  useEffect(() => {
    setLanguages(userData.languages);
  }, [userData.languages]);

  const handleSubmit = async () => {
    try {
      updateRequiredServices({ languages }, userData.uid);
      router.push('/onboarding?stage=7');
    } catch (error) {
      console.log(error);
    }
  };

  const findLocalDialect = (language) => {
    let allLanguages = [];
    SUPPORTED_REGIONS.forEach(({ data }) => {
      data.forEach((el) => allLanguages.push(el));
    });
    return allLanguages.find((el) => el.languageName === language);
  };

  const handleRemoveLanguage = (language) => {
    let allLanguages = [...languages];
    if (allLanguages.length > 1) {
      allLanguages.splice(allLanguages.indexOf(language), 1);
      setLanguages(allLanguages);
    } else {
      setIsError(true);
    }
  };

  const handleMultipleLanguages = (option) => {
    const allLanguages = [...languages];
    if (allLanguages.includes(option))
      allLanguages.splice(allLanguages.indexOf(option), 1);
    else allLanguages.push(option);
    setLanguages(allLanguages);
  };

  return (
    <div className="m-auto w-[80%] 2xl:w-[70%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Received recommended languages
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:mx-auto md:w-2/5 md:text-center md:text-xl">
        We recommend you translate for these languages. Feel free to edit the
        list as you please!
      </p>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {languages.map(
          (language, index) =>
            language !== 'Others' && (
              <div
                className="gradient-dark flex max-w-[360px] flex-row justify-between rounded-md p-s1.5"
                key={index}
              >
                <div className="flex flex-row items-center justify-between">
                  <Image
                    src={userData.picture}
                    alt="profile-image"
                    height={40}
                    width={40}
                    className="block rounded-full"
                  />
                  <div className="ml-3 flex flex-col">
                    <h2 className="text-lg">
                      {userData.youtubeChannelName}{' '}
                      {findLocalDialect(language)['localDialect']}
                    </h2>
                    <p className="text-sm">YouTube</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleRemoveLanguage(
                      findLocalDialect(language)['languageName']
                    )
                  }
                >
                  <Image src={Trash} alt="" width={24} height={24} />
                </button>
              </div>
            )
        )}
      </div>
      {isError && (
        <p className="my-s3 text-center text-xl text-red">
          At least one language is required
        </p>
      )}

      {selectLanguages && (
        <div className="mx-auto mt-4 max-w-[360px]">
          <MultipleSelectInput
            hideCheckmark
            text="Edit suggested languages"
            options={LANGUAGES}
            answer={languages}
            hasSubmitted={true}
            onChange={(event) => handleMultipleLanguages(event)}
          />
        </div>
      )}

      <div className="mx-auto mt-4 w-[min(360px,90%)]">
        <OnboardingButton onClick={handleSubmit} theme="light">
          Continue
        </OnboardingButton>
      </div>
      {!selectLanguages && (
        <div className="mx-auto mt-4 w-[min(360px,90%)]">
          <OnboardingButton
            onClick={() => setSelectLanguages(true)}
            theme="white"
          >
            Add another language
          </OnboardingButton>
        </div>
      )}
    </div>
  );
};

export default OnboardingStep6;
