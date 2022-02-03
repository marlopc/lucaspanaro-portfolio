import React from 'react';

export const localeContext = React.createContext();

const LocaleProvider = ({ children, locale }) => {
  return (
    <localeContext.Provider value={{ locale }}>
      {children}
    </localeContext.Provider>
  )
};

export default LocaleProvider;