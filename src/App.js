import { Outlet } from 'react-router-dom';
import ResetCSS from './assets/GlobalStyle';
import {
  TransactionContextProvider as FinancialProvider,
} from './contexts/TransactionContext';
import { AuthContextProvider as AuthProvider } from './contexts/authContext';

export default function App() {
  return (
    <>
      <ResetCSS />
      <AuthProvider>
        <FinancialProvider>
          <Outlet />
        </FinancialProvider>
      </AuthProvider>
    </>
  );
}
