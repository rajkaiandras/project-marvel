import { useState } from 'react';

// configs
import { projectAuth } from '../configs/firebaseConfig';

// hooks
import { useAuthContext } from './useAuthContext';

export const useLogOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logOut = async () => {
    setError(null);
    setIsPending(true);

    try {
      // sign the user out
      await projectAuth.signOut();

      // dispatch logout action
      dispatch({ type: 'LOG_OUT' });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logOut, error, isPending };
};
