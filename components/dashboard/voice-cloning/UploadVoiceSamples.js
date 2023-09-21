import { useState } from 'react';
import ToggleButton from '../../FormComponents/ToggleButton';
import SingleVoiceUpload from './SingleVoiceUpload';
import MultipleVoiceUpload from './MultipleVoiceUpload';

const UploadVoiceSamples = () => {
  const [isMultiple, setIsMultiple] = useState(false);

  const handleMultipleToggle = (e) => {
    setIsMultiple(e.target.checked);
  };

  return (
    <div>
      <p className="text-center text-xl">
        Upload voice samples with clear sound and no background noises.
        <br /> Minimum of 5 voice samples required
      </p>

      <div className="mt-s3 flex items-center justify-center">
        <p className="mr-s3">Upload for voice samples for multiple people</p>
        <ToggleButton
          isChecked={isMultiple}
          handleChange={handleMultipleToggle}
        />
      </div>

      {!isMultiple ? <SingleVoiceUpload /> : <MultipleVoiceUpload />}
    </div>
  );
};

export default UploadVoiceSamples;
