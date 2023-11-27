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
    <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-black/80 p-2 md:p-0">
      <div className="flex w-full flex-col gap-y-4 rounded-xl bg-gray-1 p-s2 md:gap-y-4 md:p-s3">
        <p className="text-2xl">Are you sure, you want to delete?</p>
        <p className="text-xl">
          Deleting will restart your progress and you will <br />
          have to re-record all of your voice samples.
        </p>
        <div className="flex w-full flex-col items-center justify-between gap-8 gap-x-8 md:flex-row md:gap-0">
          <Button
            type="primary"
            purpose="onClick"
            onClick={() => deleteItHandler()}
          >
            yes, delete it
          </Button>
          <Button
            type="primary"
            purpose="onClick"
            onClick={() => deleteOptionhandler()}
          >
            No, Keep it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteVoiceComponent;
