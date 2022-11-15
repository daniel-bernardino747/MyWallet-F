import { Outlet } from 'react-router-dom';
import ResetCSS from '../../assets/GlobalStyle';

export default function Root() {
  return (
    <>
      <ResetCSS />
      <Outlet />
    </>
  );
}
