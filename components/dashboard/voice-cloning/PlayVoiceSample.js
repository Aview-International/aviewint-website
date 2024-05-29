import Graphics from '../../../public/img/graphics/translator-landing.png';
import Image from 'next/image';
import OnboardingButton from '../../Onboarding/button';
import { VOICEPROMPTS } from '../../../constants/constants';
import { deleteVoiceClone, testVoiceCloning } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useRef, useState } from 'react';
import Trash from '../../../public/img/icons/trash.svg';
import { useRouter } from 'next/router';
import Modal from '../../UI/Modal';
import PlaycIcon from '../../../public/img/icons/play.svg';
import Plus from '../../../public/img/icons/plus.svg';
import VoiceRecordingFromPrompts from './VoiceRecordingFromPrompts';
import { useSelector } from 'react-redux';

const PlayVoiceSample = ({ voiceId, updateVoices }) => {
  const router = useRouter();
  const samples = useSelector((data) => data.voices.voiceSamples);
  const samplesCount = samples.flatMap((data) => data.samples);
  const [isLoading, setIsLoading] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showText, setShowText] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showRecorder, setShowRecorder] = useState(false);

  const audioRef = useRef(null);
  const testVoice = async () => {
    try {
      setIsLoading(true);
      setShowText(true);
      const singleVoiceId = Object.values(voiceId)[0];
      const source = await testVoiceCloning(VOICEPROMPTS[0], singleVoiceId);
      setShowPlayer(true);
      let blob = new Blob([source.data], { type: 'audio/mp3' });
      const audioPlayer = audioRef.current;
      audioPlayer.src = URL.createObjectURL(blob);
      audioPlayer.load();
      audioPlayer.play();
      setIsLoading(false);
    } catch (error) {
      setShowPlayer(false);
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  const handleDelete = () => {
    setDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setDeleteModal(false);
  };

  const handleDeleteVoice = async () => {
    try {
      setDeleteLoading(true);
      await deleteVoiceClone(voiceId);
      setDeleteLoading(false);
      router.reload();
    } catch (error) {
      setDeleteLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      {showRecorder ? (
        <VoiceRecordingFromPrompts
          promptStage={samplesCount.length}
          updateVoices={updateVoices}
        />
      ) : (
        <div className="h-full w-full">
          {deleteModal && (
            <Modal closeModal={handleCancelDelete}>
              <div className="w-full">
                <p className="my-s3 text-center text-xl">
                  Are you sure to delete and start all over?
                </p>

                <div className="flex w-full flex-col items-center gap-s2 xs:flex-row">
                  <OnboardingButton
                    isLoading={deleteLoading}
                    theme="light"
                    onClick={handleDeleteVoice}
                  >
                    Yes, Delete
                  </OnboardingButton>
                  <OnboardingButton theme="white" onClick={handleCancelDelete}>
                    No, Cancel
                  </OnboardingButton>
                </div>
              </div>
            </Modal>
          )}
          <div className="mx-auto my-s3 block w-2/5">
            <Image src={Graphics} alt="" layout="responsive" />
          </div>
          <br />

          <p className="text-center text-xl">
            {samplesCount.length} voice{' '}
            {samplesCount.length > 1 ? 'samples' : 'sample'} saved
          </p>
          <br />

          <div className="mx-auto mt-s3 flex w-full max-w-[450px] flex-col items-center justify-center gap-3 rounded-2xl border-2 p-2 md:mt-0">
            {showText && <p>{VOICEPROMPTS[0]}</p>}

            <div className="mt-s2">
              <button
                onClick={testVoice}
                className="flex items-center gap-s2 hover:underline"
              >
                <Image src={PlaycIcon} alt="" />
                Play example of voice clone
              </button>
              <div className="mt-s3 flex w-full justify-center">
                <audio hidden={!showPlayer} ref={audioRef} controls></audio>
              </div>
            </div>
          </div>

          <div className="mt-s3 flex">
            <button
              className="flex w-full items-center justify-center hover:underline"
              onClick={() => setShowRecorder(true)}
            >
              <span className="pr-2">Add more voice samples</span>
              <Image src={Plus} alt="" width={20} height={20} />
            </button>
            <button
              className="flex w-full items-center justify-center hover:underline"
              onClick={handleDelete}
            >
              <span className="pr-2">
                Delete {Object.keys(voiceId).length > 1 ? 'voices' : 'voice'}{' '}
                and start over
              </span>
              <Image src={Trash} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayVoiceSample;
