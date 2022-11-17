import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TransactionContext = createContext();

export function TransactionContextProvider({ children }) {
  const [isDeposit, setIsDeposit] = useState(true);

  return (
    <TransactionContext.Provider value={{ isDeposit, setIsDeposit }}>
      {children}
    </TransactionContext.Provider>
  );
}
TransactionContextProvider.propTypes = {
  children: PropTypes.any,
};
