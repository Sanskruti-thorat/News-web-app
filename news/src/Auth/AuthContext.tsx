/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// AuthContext.tsx
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  children: ReactNode;
}

interface AuthState {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

}

interface AuthContextType extends AuthState {
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_login');
    setLoggedIn(!!(storedUser && JSON.parse(storedUser))); 
  }, []);

  const login = (user: any) => {
    localStorage.setItem('user_login', JSON.stringify(user));
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('user_login');
    setLoggedIn(false);
  };

  const authContextValue: AuthContextType = {
    loggedIn,
    login,
    logout,
    setLoggedIn, 

  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
