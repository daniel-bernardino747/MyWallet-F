import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
