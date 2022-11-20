import { useState } from 'react';
import { projectAuth } from '../configs/firebaseConfig';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signUp = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // sign up user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);

      if (!response) {
        throw new Error('could not complete sign up');
      }

      // add display name to user
      await response.user.updateProfile({ displayName: displayName });

      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signUp, error, isPending };
};
