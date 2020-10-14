import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const [hasAccount, setHasAccount] = useState(false);

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
    },
    hasAccount,
    setHasAccount

  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Consumer: Context.Consumer
};
