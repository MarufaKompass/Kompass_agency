import React, { createContext, useContext, useState } from 'react';

const storage = JSON.parse(sessionStorage.getItem('usersInfo'));

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(storage);

  const [error, setError] = useState('');

  const [country, setCountry] = useState([]);

  const [profile, setProfile] = useState('');
  const [selectedPassword, setSelectedPassword] = useState('');

  const passwordView = (e) => {
    setSelectedPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        error,
        setError,
        user,
        setUser,
        profile,
        setProfile,
        handleTogglePassword,
        selectedPassword,
        setSelectedPassword,
        passwordView,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
