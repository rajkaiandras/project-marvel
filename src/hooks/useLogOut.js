import { useState, useEffect } from 'react';

// configs
import { projectAuth } from '../configs/firebaseConfig';

// hooks
import { useAuthContext } from './useAuthContext';

export const useLogOut = () => {
  const [isCancelled, setIsCancelled] = useState(false);
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

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logOut, error, isPending };
};
