import { createContext, useState } from "react";

export const Context = createContext({ isAuthenticated: false });

export const AppWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}>
      {children}
    </Context.Provider>
  );
};
