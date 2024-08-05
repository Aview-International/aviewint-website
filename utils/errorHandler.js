import { toast } from 'react-toastify';

const ErrorHandler = (error, message) => {
  if (!error) {
    toast.error(message || 'Oops, something went wrong');
    return;
  }

  if (!error.response?.data) {
    toast.error(error.message);
    return;
  } else {
    if (typeof error.response.data.message === 'string') {
      toast.error(error.response.data.message);
      return;
    } else {
      toast.error('Oops, something went wrong');
      return;
    } //NEED TO SHOW ERROR;
  }
};

export default ErrorHandler;
