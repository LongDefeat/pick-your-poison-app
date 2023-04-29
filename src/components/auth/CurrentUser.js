import React, { useState, useEffect } from "react";
import CurrentUserContext from "./CurrentUserContext";

export default function CurrentUser({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

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
