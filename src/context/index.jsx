import React, { useState, useMemo } from 'react';

export const MyContext = React.createContext();

function Provider(props) {
  const [userInformations, setUserInformations] = useState('');
  const [isInWork, setWorking] = useState(0);
  const [initialDate, setInitialDate] = useState('')
  const [initialHour, setInitialHour] = useState('')

  const contextValue = useMemo(() => ({
    userInformations,
    isInWork,
    initialDate,
    initialHour,
    setUserInformations,
    setWorking,
    setInitialDate,
    setInitialHour,
  }), [userInformations, isInWork, initialDate, initialHour]);

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Provider;
