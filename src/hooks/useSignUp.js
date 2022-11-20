import { useState, useEffect } from 'react';
import { projectAuth } from '../configs/firebaseConfig';

// hooks
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignUp = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // sign up user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error('could not complete sign up');
      }

      // add display name to user
      await response.user.updateProfile({ displayName: displayName });

      // dispatch login action
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

  return { signUp, error, isPending };
};
