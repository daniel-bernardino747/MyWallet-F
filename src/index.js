import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Root from './routes/Root';
import Transaction from './routes/Transaction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/sign-up',
        element: <Register />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/transaction',
        element: <Transaction />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals();
