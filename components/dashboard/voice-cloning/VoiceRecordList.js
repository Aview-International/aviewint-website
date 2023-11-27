import React, { useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import Button from '../../UI/Button';
import VoiceSample from '../../UI/VoiceSample';
import AddMoreComponent from './AddMoreComponent';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import DeleteVoiceComponent from './DeleteVoiceComponent';
import { uploadRecordedVoice } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import AiVoice from './AiVoice';

const VoiceRecordList = ({ audioRecordings }) => {
  const router = useRouter();
  const [isDeletedOption, setIsDeletedOption] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState(false);
  const [finalVoiceSample, setFinalVoiceSample] = useState([]);
  const [initialData, setInitialData] = useState(audioRecordings);
  const user = useSelector((state) => state.user);
  const userId = user.uid;

  const addVoiceSample = () => {
    setOption(!option);
  };

  const deleteOptionHandler = () => {
    setIsDeletedOption(!isDeletedOption);
  };

  const deleteVoiceRecordings = (blob) => {
    const updatedArray = initialData.filter(
      (audioRecord) => audioRecord.id !== blob.id
    );
    setInitialData(updatedArray);
  };

  const saveVoiceRecordings = (blob) => {
    const blobToSave = initialData.find(
      (audioRecord) => audioRecord.id === blob.id
    );
    if (blobToSave) {
      blobToSave.isSaved = true;
      setFinalVoiceSample([...finalVoiceSample, blobToSave]);
    }
  };

  const saveAllRecordedVoiceSamplesHandler = async () => {
    try {
      setIsLoading(!isLoading);
      await uploadRecordedVoice(finalVoiceSample, userId);
      setIsLoading(!isLoading);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(!isLoading);
      ErrorHandler(error);
    }
  };

  return (
    <div>
      {option ? (
        <AiVoice
          prompt={5 - (5 - initialData.length)}
          initialRecordings={initialData}
        />
      ) : (
        <div className="w-ful flex h-full flex-col items-center justify-center gap-y-10">
          <p className="text-xl md:text-5xl">Voice Recording complete 🎤🔥</p>
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:grid md:grid-cols-3 md:gap-3">
            {initialData.map((blob, i) => (
              <VoiceSample
                key={i}
                id={i + 1}
                type="record"
                audioData={blob}
                deleteAudioSample={deleteVoiceRecordings}
                saveAudioSample={saveVoiceRecordings}
              />
            ))}
            {initialData.length < 5 && (
              <div className="h-full w-full">
                <AddMoreComponent
                  addVoiceOrSpeaker={addVoiceSample}
                  padding={60}
                />
              </div>
            )}
          </div>
          <div className="mt-s4 flex w-3/4 flex-col items-center justify-center gap-5 md:flex-row md:justify-between md:gap-0">
            <Button
              type="primary"
              purpose="onClick"
              onClick={deleteOptionHandler}
            >
              Delete All Recordings
            </Button>
            <div className=":w-[min(360px,90%)] m-auto">
              <OnboardingButton
                disabled={finalVoiceSample.length >= 5}
                onClick={saveAllRecordedVoiceSamplesHandler}
                isLoading={isLoading}
                theme="light"
              >
                Save Voice Recordings
              </OnboardingButton>
            </div>
          </div>
          {isDeletedOption ? (
            <DeleteVoiceComponent deleteOptionhandler={deleteOptionHandler} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default VoiceRecordList;
