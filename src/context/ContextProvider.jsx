import React, { createContext } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}

export default ContextProvider;
