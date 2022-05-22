import { useState } from "react";

export default function useLocalStorage(key, initialState) {
  const initData =
    localStorage.getItem(key) !== null
      ? JSON.parse(localStorage.getItem(key))
      : initialState;

  const [state, setState] = useState(initData);
  localStorage.setItem(key, JSON.stringify(initData));

  function mutateState(newValue) {
    localStorage.setItem(key, JSON.stringify(newValue));
    setState(newValue);
  }

  return [state, mutateState];
}
