import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  console.log(initialState);
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
