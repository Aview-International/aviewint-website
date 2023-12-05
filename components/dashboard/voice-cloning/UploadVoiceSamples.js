import { useState } from 'react';
import ToggleButton from '../../FormComponents/ToggleButton';
import SingleVoiceUpload from './SingleVoiceUpload';
import MultipleVoiceUpload from './MultipleVoiceUpload';
import VoiceSample from '../../UI/VoiceSample';

const UploadVoiceSamples = () => {
  const [isMultiple, setIsMultiple] = useState(false);
  const [option, setOption] = useState(false);

  const handleMultipleToggle = (e) => {
    setIsMultiple(e.target.checked);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col items-center justify-start gap-y-4">
        <p className="text-center text-2xl md:text-4xl">
          How to upload voice sample
        </p>
        <p className="w-4/5 md:w-[33%]">
          Upload voice samples with clear sound and no background noises.
          Minimum of 5 voice samples are required.
        </p>
        <div className="flex w-full flex-row items-center justify-evenly gap-2 md:justify-center">
          <ToggleButton
            isChecked={isMultiple}
            handleChange={handleMultipleToggle}
          />
          <p>Upload voice samples for multiple people</p>
        </div>
      </div>
      <div className="mt-2 h-full w-full md:mt-s10">
        {!isMultiple ? (
          <SingleVoiceUpload />
        ) : (
          <MultipleVoiceUpload optionHandler={setOption} />
        )}
        {option ? <VoiceSample /> : null}
      </div>
    </div>
  );
};

export default UploadVoiceSamples;
