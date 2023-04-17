import React, { useState, useMemo } from 'react';

export const MyContext = React.createContext();

function Provider(props) {
  const [userInformations, setUserInformations] = useState('');

  const contextValue = useMemo(() => ({
    userInformations,
    setUserInformations
  }), [userInformations]);

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Provider;
