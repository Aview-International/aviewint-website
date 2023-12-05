import Graphics from '../../../public/img/graphics/translator-landing.png';
import Image from 'next/image';
import OnboardingButton from '../../Onboarding/button';
import { VOICEPROMPTS } from '../../../constants/constants';
import { deleteVoiceClone, testVoiceCloning } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useRef, useState } from 'react';
import Trash from '../../../public/img/icons/trash.svg';
import { useRouter } from 'next/router';

const PlayVoiceSample = ({ voiceId, uid }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showText, setShowText] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
      await deleteVoiceClone(uid, voiceId);
      setDeleteLoading(false);
      router.reload();
    } catch (error) {
      setDeleteLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div className="h-full w-full">
      {deleteModal && (
        <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-[rgba(0,0,0,0.8)]">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black p-s2">
            <p className="my-s3 text-center text-xl">
              Are you sure to delete and start all over?
            </p>

            <div className="flex w-[400px] items-center gap-s2">
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
        </div>
      )}
      <div className="mx-auto my-s3 block w-2/5">
        <Image src={Graphics} alt="" layout="responsive" />
      </div>
      <br />

      <p className="text-center text-xl">
        {Object.keys(voiceId).length} voice{' '}
        {Object.keys(voiceId).length > 1 ? 'samples' : 'sample'} currently
        available
      </p>
      <br />

      <div className="mx-auto mt-s3 flex w-full max-w-[450px] flex-col items-center justify-center gap-3 rounded-2xl border-2 p-s2 md:mt-0">
        {showText && <p>{VOICEPROMPTS[0]}</p>}

        <div className=" mt-s2">
          <OnboardingButton
            theme="light"
            isLoading={isLoading}
            onClick={testVoice}
          >
            Play example of voice clone in English
          </OnboardingButton>
          <div className="mt-s3 flex w-full justify-center">
            <audio hidden={!showPlayer} ref={audioRef} controls></audio>
          </div>
        </div>
      </div>

      <button
        className="mt-s3 flex w-full items-center justify-center hover:underline"
        onClick={handleDelete}
      >
        <span className="pr-s2">Delete voice and start over</span>
        <Image src={Trash} alt="" />
      </button>
    </div>
  );
};

export default PlayVoiceSample;
