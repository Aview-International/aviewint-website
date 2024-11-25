import { useSelector } from 'react-redux';
import { SUPPORTED_REGIONS } from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import GlobalButton from '../Onboarding/button';
import Image from 'next/image';
import ToggleButton from '../FormComponents/ToggleButton';
import { useEffect } from 'react';
import Textarea from '../FormComponents/Textarea';
import defaultPfp from '../../public/img/graphics/user.webp';

const TranslateOptions = ({
  handleSubmit,
  payload,
  setPayload,
  isLoading,
  uploadProgress,
  handleCancelVideoUpload,
  videoStats,
}) => {
  const userData = useSelector((state) => state.user);
  const youtubePicture = useSelector(
    (state) => state.youtube?.channelDetails?.thumbnail // pfp is here
  );
  const findLocalDialect = (language) => {
    let allLanguages = [];
    SUPPORTED_REGIONS.forEach(({ data }) => {
      data.forEach((el) => allLanguages.push(el));
    });
    return allLanguages.find((el) => el.languageName === language);
  };

  useEffect(() => {
    if (userData.saveSettings)
      setPayload({ ...payload, languages: userData.preferences });
    else setPayload({ ...payload, languages: userData.languages });
  }, [userData.languages]);

  const handleChange = (language) => {
    let allLanguages = [...payload.languages];
    if (allLanguages.includes(language))
      allLanguages.splice(allLanguages.indexOf(language), 1);
    else allLanguages.push(language);
    setPayload({ ...payload, languages: allLanguages });
  };

  const revenue = (cpm) =>
    Number((cpm / 1000) * videoStats.totalViews).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <>
      <h3 className="mb-s3 text-2xl font-bold">Distribution</h3>
      <p className="mb-s4 text-lg">
        Which channels do you want these videos posted on? Want to post in an
        additional language? You can create more international channels.
      </p>
      <div className="max-h-[368px] overflow-y-auto overflow-x-hidden pr-s1.5">
        {userData.languages.map((language, index) => (
          <div
            className="min-w-max(100%,360px) gradient-dark mb-s2 flex items-center justify-between rounded-md p-s1.5"
            key={index}
          >
            <div className="flex items-center justify-between">
              <Image
                src={youtubePicture || defaultPfp}
                alt="profile-image"
                height={40}
                width={40}
                className="block rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-lg">
                  {userData.youtubeChannelName}
                  {findLocalDialect(language)?.['localDialect']}
                </h2>
                <p className="text-sm">{language}</p>
                {videoStats && findLocalDialect(language)?.['costPerCPM'] && (
                  <div className="border-1 mt-s1 rounded border border-white-transparent bg-white-transparent p-s0 text-green">
                    Expected Revenue: {'$'}
                    {revenue(findLocalDialect(language)?.['costPerCPM'])}
                  </div>
                )}
              </div>
            </div>
            <ToggleButton
              isChecked={payload.languages.includes(language)}
              handleChange={() => handleChange(language)}
            />
          </div>
        ))}
      </div>
      <p className="mt-s4 text-lg">
        Is there anything else you would like us to know?
      </p>
      <Textarea
        placeholder="Additional notes"
        onChange={(e) =>
          setPayload({ ...payload, additionalNote: e.target.value })
        }
      />
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, saveSettings: e.target.checked })
        }
        isChecked={payload.saveSettings}
        label="Save these settings for future translations"
      />
      <br />
      {isLoading &&
        (uploadProgress < 100 ? (
          <div className="h-3 w-full rounded-full">
            <div
              className="gradient-2 h-full rounded-full"
              style={{ width: uploadProgress + '%' }}
            ></div>
          </div>
        ) : (
          <p>Processing video please wait</p>
        ))}

      {uploadProgress > 0 && (
        <div className="mt-s3 w-full md:w-36">
          <GlobalButton onClick={handleCancelVideoUpload} theme="error">
            Cancel Upload
          </GlobalButton>
        </div>
      )}
      {!isLoading && (
        <div className="w-full md:w-36">
          <GlobalButton isLoading={isLoading} onClick={handleSubmit}>
            Submit
          </GlobalButton>
        </div>
      )}
    </>
  );
};

export default TranslateOptions;
