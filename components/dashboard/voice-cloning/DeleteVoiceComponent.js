import React from 'react'
import Button from '../../UI/Button'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/reducers/user.reducer';

const DeleteVoiceComponent = ({ deleteOptionhandler }) => {
  const dispatch = useDispatch()
  const router = useRouter();

  const deleteItHandler = () => {
    dispatch(setUser({ recordedVoiceSamples: null }))
    deleteOptionhandler()
    toast('Deleted All Voice samples')
    router.push('/dashboard')
  }

  return (
    <div className='absolute inset-0 w-full h-full z-50 bg-black/80 flex justify-center items-center'>
      <div className='flex flex-col gap-y-4 rounded-xl bg-gray-1 p-s3 text-xl'>
        <p>Are you sure, you want to delete?</p>
        <p>Deleting will restart your progress and you will <br />have to re-record all of your voice samples.</p>
        <div className='flex flex-row w-full justify-between items-center gap-x-8'>
          <Button type="primary" purpose="onClick" onClick={() => deleteItHandler()}>
            yes, delete it
          </Button>
          <Button type="secondary" purpose="onClick" onClick={() => deleteOptionhandler()}>
            No, Keep it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteVoiceComponent;
