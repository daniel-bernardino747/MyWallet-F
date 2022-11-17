import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const authState = useMemo(() => ({ auth, setAuth }), []);

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  );
}
AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
