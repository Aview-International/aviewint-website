import { toast } from 'react-toastify';

const ErrorHandler = (error, message) => {
  if (!error) {
    toast.error(message || 'Oops, something went wrong');
    return;
  }
  const { data } = error.response;
  if (!!data) {
    if (typeof data.message === 'string') {
      toast.error(data.message);
    } else toast.error(data.message[0]);
    return;
  } else toast.error(error.message);
};

export default ErrorHandler;
