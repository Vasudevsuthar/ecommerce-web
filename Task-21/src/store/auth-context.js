import React, { useState, useEffect } from "react";
import {Redirect} from 'react-router-dom';

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if(userIsLoggedIn){
      let timer = setTimeout(() => {
        logoutHandler();
        alert('You have been automatically logged out...');
        <Redirect to='/auth' />
      },60000)
      return (() => {
        clearTimeout(timer);
      })
    }
  }, [userIsLoggedIn])
 
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
