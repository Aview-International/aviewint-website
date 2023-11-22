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
    <div className='w-full h-full flex flex-col'>
       <div className='flex flex-col w-full justify-start items-center gap-y-4 h-full'>
      <p className="text-center text-4xl">
        How to upload voice sample
      </p>
      <p className="w-[33%]">
        Upload voice samples with clear sound and no background noises. Minimum of 5 voice samples are required.
      </p>
      <div className='flex flex-row gap-4 w-full justify-center items-center'>
        <ToggleButton
          isChecked={isMultiple}
          handleChange={handleMultipleToggle}
        />
       <p>Upload voice samples for multiple people</p>
      </div>
    </div>
    <div className='w-full h-full mt-s10'>
      {!isMultiple ? <SingleVoiceUpload /> : <MultipleVoiceUpload optionHandler={setOption}/>}
      { option ? <VoiceSample /> : null }
    </div> 
  </div>
  );
};

export default UploadVoiceSamples;
