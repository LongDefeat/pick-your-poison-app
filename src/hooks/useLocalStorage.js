import { useState, useEffect } from "react";

function useLocalStorage(key, firstvalue = null) {
  const isClient = typeof window === "object";

  const initialValue = isClient
    ? localStorage.getItem(key) || firstvalue
    : firstvalue;

  const [item, setItem] = useState(initialValue);

  useEffect(
    function setKeyInLocalStorage() {
      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    },
    [key, item]
  );

  return [item, setItem];
}

export default useLocalStorage;
