import React from 'react';
import Button from '../../UI/Button';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/reducers/user.reducer';

const DeleteVoiceComponent = ({ deleteOptionhandler }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteItHandler = () => {
    dispatch(setUser({ recordedVoiceSamples: null }));
    deleteOptionhandler();
    toast('Deleted All Voice samples');
    router.push('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen bg-black/90">
      <div className="fixed top-1/2 left-1/2 max-w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black p-s2 md:p-s3">
        <p className="text-2xl">Are you sure, you want to delete?</p>
        <p className="mt-s2 mb-s4 text-xl">
          Deleting will restart your progress and you will <br />
          have to re-record all of your voice samples.
        </p>
        <div className="flex w-full flex-col items-center justify-between gap-8 gap-x-8 md:flex-row md:gap-0">
          <Button
            type="primary"
            purpose="onClick"
            onClick={() => deleteItHandler()}
          >
            Yes, delete it
          </Button>
          <Button
            type="secondary"
            purpose="onClick"
            onClick={() => deleteOptionhandler()}
          >
            No, keep it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteVoiceComponent;
