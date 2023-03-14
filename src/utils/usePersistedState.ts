import { useState, useEffect } from 'react';

export const usePersistedState = (key: string, initialState: any) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key) || initialState;

    return storageValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
