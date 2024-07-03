import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StatusCode } from './statusCodes';

export const displayNotification = (statusCode: StatusCode) => {
  if (statusCode.type === 'error') {
    toast.error(statusCode.message);
  } else if (statusCode.type === 'success') {
    toast.success(statusCode.message);
  }
};
