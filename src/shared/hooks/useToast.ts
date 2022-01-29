import { useToast as useToastLib } from 'react-native-toast-notifications';

type ToastTypes = 'success' | 'warning' | 'danger';

type AddToastProps = {
  message: string;
  type: ToastTypes;
};

export const useToast = () => {
  const toast = useToastLib();

  const addToast = ({ type, message }: AddToastProps) => {
    toast.show(message, {
      type,
    });
  };

  return {
    addToast,
  };
};
