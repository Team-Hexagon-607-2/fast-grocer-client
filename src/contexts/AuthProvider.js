import { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [searchText, setSearchText] = useState("");
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
