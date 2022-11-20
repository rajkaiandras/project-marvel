import { useState, useEffect } from 'react';

// configs
import { projectAuth } from '../configs/firebaseConfig';

// hooks
import { useAuthContext } from './useAuthContext';

export const useLogIn = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logIn = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // sign the user in
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      // dispatch log in action
      dispatch({ type: 'LOG_IN', payload: response.user });

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

  return { logIn, error, isPending };
};
