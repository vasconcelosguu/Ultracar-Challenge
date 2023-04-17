import React, { createContext } from 'react';

export const Context = createContext(0);

function Provider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
};

export default Provider;
