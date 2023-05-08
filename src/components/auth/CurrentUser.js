import React, { useState, useEffect } from "react";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "@/hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "pick-your-poison-token";

export default function CurrentUser({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  // const [token, setToken] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem(TOKEN_STORAGE_ID);
    setToken(item);
  }, [setToken]);

  useEffect(() => {
    setCurrentUser({ name: "John Doe" });
  }, []);

  const initialValue = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
  };

  return (
    <CurrentUserContext.Provider value={initialValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}
