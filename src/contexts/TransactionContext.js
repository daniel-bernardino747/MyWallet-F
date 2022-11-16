import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const TransactionContext = createContext();

export function TransactionContextProvider({ children }) {
  const [isDeposit, setIsDeposit] = useState(true);

  const transactionState = useMemo(() => ({ isDeposit, setIsDeposit }), []);
  return (
    <TransactionContext.Provider value={transactionState}>
      {children}
    </TransactionContext.Provider>
  );
}
TransactionContextProvider.propTypes = {
  children: PropTypes.any,
};
