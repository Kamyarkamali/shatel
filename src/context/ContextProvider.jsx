import { useState } from "react";
import React, { createContext } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const [hamburgrMenu, setHamburgerMenu] = useState(false);

  return (
    <Context.Provider value={{ hamburgrMenu, setHamburgerMenu }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
