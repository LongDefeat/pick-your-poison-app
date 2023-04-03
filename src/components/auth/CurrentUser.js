import React, { useState, useEffect } from "react";
import CurrentUserContext from "./CurrentUserContext";

export default function CurrentUser({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser({ name: "John Doe" });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
