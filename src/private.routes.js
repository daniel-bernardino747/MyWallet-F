import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children }) {
  const token = window.localStorage.getItem('token');
  if (token === null) {
    return <Navigate to="/login" state={{ from: global.history.location }} />;
  }
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.any,
};
