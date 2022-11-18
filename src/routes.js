import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import PrivateRoute from './private.routes';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Transaction from './pages/Transaction';
import ErrorPage from './pages/Error';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={(
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )}
        errorElement={<ErrorPage />}
      />
      <Route
        path="login"
        element={<Login />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="sign-up"
        element={<Register />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="transaction"
        element={(
          <PrivateRoute>
            <Transaction />
          </PrivateRoute>
        )}
        errorElement={<ErrorPage />}
      />
    </Route>,
  ),
);

export default routers;
