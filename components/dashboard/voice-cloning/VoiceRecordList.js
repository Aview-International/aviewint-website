import React, { useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import VoiceSample from '../../UI/VoiceSample';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import DeleteVoiceComponent from './DeleteVoiceComponent';
import { uploadRecordedVoice } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import AiVoice from './VoiceRecordingFromPrompts';

const VoiceRecordList = ({ recordings, setRecordings }) => {
  const router = useRouter();
  const [isDeletedOption, setIsDeletedOption] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState(false);
  const user = useSelector((state) => state.user);
  const userId = user.uid;

  const addVoiceSample = () => {
    setOption(!option);
  };

  const deleteOptionHandler = () => {
    setIsDeletedOption(!isDeletedOption);
  };

  const deleteVoiceRecordings = (blob) => {
    const updatedArray = recordings.filter(
      (audioRecord) => audioRecord.id !== blob.id
    );
    setRecordings(updatedArray);
  };

  const saveAllRecordedVoiceSamplesHandler = async () => {
    console.log(recordings);
    try {
      setIsLoading(true);
      await uploadRecordedVoice(recordings, userId);
      setIsLoading(false);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div className="w-full">
      {option ? (
        <AiVoice
          prompt={5 - (5 - recordings.length)}
          initialRecordings={recordings}
        />
      ) : (
        <div className="h-full w-full items-center">
          <p className="text-center text-xl md:text-5xl">
            Voice Recording complete 🎤🔥
          </p>
          <div className="my-10 grid h-full w-full grid-cols-[repeat(auto-fill,259px)] items-center justify-center gap-4 md:gap-3">
            {recordings.map((blob, i) => (
              <VoiceSample
                key={i}
                id={i + 1}
                type="record"
                audioData={blob}
                deleteAudioSample={deleteVoiceRecordings}
              />
            ))}
          </div>
          <div className="mx-auto mt-s4 w-3/4 max-w-[250px] gap-5">
            <OnboardingButton
              disabled={recordings.length < 5}
              onClick={saveAllRecordedVoiceSamplesHandler}
              isLoading={isLoading}
              theme="light"
            >
              Save recordings
            </OnboardingButton>
          </div>
          {isDeletedOption && (
            <DeleteVoiceComponent deleteOptionhandler={deleteOptionHandler} />
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceRecordList;
