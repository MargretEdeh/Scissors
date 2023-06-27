import React, { createContext, useEffect, useState } from 'react';

interface AuthContextProps {
  accessToken: string;
  isLoggedIn: boolean;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps>({
  accessToken: '',
  isLoggedIn: false,
  setAccessToken: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>(() => {
    const storedToken = localStorage.getItem('accessToken');
    return storedToken ? storedToken : '';
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, isLoggedIn, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
