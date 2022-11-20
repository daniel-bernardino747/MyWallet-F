import { Outlet } from 'react-router-dom';
import ResetCSS from './assets/GlobalStyle';
import {
  TransactionContextProvider as FinancialProvider,
} from './contexts/TransactionContext';

export default function App() {
  return (
    <>
      <ResetCSS />
      <FinancialProvider>
        <Outlet />
      </FinancialProvider>
    </>
  );
}
