import { useToast, useAsync } from '../../../shared/hooks';
import { useUserStore } from '../../../entities/user';
import { createSession } from '../requests';
import { HttpError } from '../../../shared/protocols/http';

type Credentials = {
  email: string;
  password: string;
};

type LoginError = { message: string };

export const useAuth = () => {
  const { addToast } = useToast();
  const { runAsync, statuses, ASSYNC_STATUS } = useAsync();

  const isLogged = useUserStore(store => store.user?.session);
  const updateUser = useUserStore(store => store.updateUser);
  const removeUser = useUserStore(store => store.removeUser);

  const handleLogin = async (credentials: Credentials) => {
    const { data, error } = await runAsync(
      'createSession',
      createSession(credentials),
    );

    if (error || !data) {
      const loginError = error as HttpError<LoginError>;
      const errorMessage = loginError.body.message;

      addToast({
        type: 'danger',
        message: errorMessage,
      });

      return;
    }

    const { user, ...session } = data.body;

    updateUser({ ...user, session });
  };

  const handleLogout = () => {
    removeUser();
  };

  return {
    handleLogin,
    handleLogout,
    isLogged,
    loginIsLoading: statuses.createSession === ASSYNC_STATUS.LOADING,
  };
};
