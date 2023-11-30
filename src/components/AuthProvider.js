import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { accountService } from '../_service/account.service';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tkn, setTkn] = useState(null);

  const login = () => {
    axios.get("http://localhost:8080/login")
      .then(response => {
        accountService.saveToken(response.headers.authorization);

        if (accountService.isLogged(response.headers.authorization)) {
          console.log(response.request.status);
        }else{
          setIsAuthenticated(false)
        }
      })
      .catch(error => {
        console.log(error);
      });
      return isAuthenticated
  };

  const logout = () => {
    // Logique de déconnexion ici si nécessaire
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{login, logout,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
