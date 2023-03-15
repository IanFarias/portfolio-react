import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(
  key: string,
  initialState: any
): Response<T> => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key) || initialState;

    return storageValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
