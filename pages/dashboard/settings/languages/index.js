import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { SettingsLayout } from '..';
import { SUPPORTED_REGIONS } from '../../../../constants/constants';
import Trash from '../../../../public/img/icons/trash.svg';
import Image from 'next/image';
import GlobalButton from '../../../../components/Onboarding/button';
import MultipleSelectInput from '../../../../components/FormComponents/MultipleSelectInput';
import ErrorHandler from '../../../../utils/errorHandler';
import { useRouter } from 'next/router';
import { updateRequiredServices } from '../../../../services/firebase';
import defaultPfp from '../../../../public/img/graphics/user.webp';
import CustomSelectInput from '../../../../components/FormComponents/CustomSelectInput';

const Preference = () => {
  const router = useRouter();
  const user = useSelector((el) => el.user);
  const youtube = useSelector((el) => el.youtube);
  const [languages, setLanguages] = useState([]);
  const allLanguagesData = useSelector((state) => state.aview.allLanguages);
  const [selectLanguages, setSelectLanguages] = useState(false);
  const allLanguages = allLanguagesData.map((el) => el.language);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLanguages(user.languages);
  }, [user.languages]);

  const handleRemoveLanguage = (language) => {
    let allLanguages = [...languages];
    allLanguages.splice(allLanguages.indexOf(language), 1);
    setLanguages(allLanguages);
  };

  const findLocalDialect = (language) => {
    let allLanguages = [];
    SUPPORTED_REGIONS.forEach(({ data }) => {
      data.forEach((el) => allLanguages.push(el));
    });
    return allLanguages.find((el) => el.languageName === language);
  };

  const handleSubmit = async () => {
    try {
      if (languages.length < 2) {
        setIsError(true);
        return;
      }
      setIsLoading(true);
      await updateRequiredServices({ languages }, user.uid);
      setIsLoading(false);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  const handleMultipleLanguages = (option) => {
    const allLanguages = [...languages];
    if (allLanguages.includes(option))
      allLanguages.splice(allLanguages.indexOf(option), 1);
    else allLanguages.push(option);
    setLanguages(allLanguages);
  };

  const handleDefaultLanguageChange = async (value) => {
    await updateRequiredServices({ defaultLanguage: value }, user.uid);
  };

  return (
    <div>
      <div className="mb-s7 flex items-center justify-between">
        <p className="text-2xl">Default Account Language</p>
        <div className="w-1/2">
          <CustomSelectInput
            onChange={handleDefaultLanguageChange}
            hasText={true}
            options={languages}
            value={user.defaultLanguage}
          ></CustomSelectInput>
        </div>
      </div>

      <p className="mb-s3 text-2xl">Preferred Languages</p>
      <div className="mx-auto grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {languages.map(
          (language, index) =>
            language !== 'Others' && (
              <div
                className="gradient-dark mx-auto flex w-full max-w-[360px] flex-row justify-between rounded-md p-s1.5"
                key={index}
              >
                <div className="flex flex-row items-center justify-between">
                  <Image
                    src={youtube.channelDetails.thumbnail || defaultPfp}
                    alt="profile-image"
                    height={40}
                    width={40}
                    className="block rounded-full"
                  />
                  <div className="ml-3 flex flex-col">
                    <h2 className="text-lg">
                      {user?.youtube?.youtubeChannelName}{' '}
                      {findLocalDialect(language)?.['localDialect']}
                    </h2>
                    <p className="text-sm">
                      {findLocalDialect(language)?.['languageName']}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleRemoveLanguage(language)}>
                  <Image src={Trash} alt="Delete" width={24} height={24} />
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
            text="Edit saved languages"
            options={allLanguages}
            answer={languages}
            hasSubmitted={true}
            onChange={(event) => handleMultipleLanguages(event)}
          />
        </div>
      )}

      <div className="mx-auto mt-4 w-[360px]">
        <GlobalButton
          onClick={handleSubmit}
          theme="light"
          isLoading={isLoading}
        >
          Save
        </GlobalButton>
      </div>
      {!selectLanguages && (
        <div className="mx-auto mt-4 w-[min(360px,90%)]">
          <GlobalButton onClick={() => setSelectLanguages(true)} theme="white">
            Add another language
          </GlobalButton>
        </div>
      )}
    </div>
  );
};

Preference.getLayout = SettingsLayout;
export default Preference;
