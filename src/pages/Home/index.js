import { Link } from 'react-router-dom';

import FinancialServices from '../../components/FinancialServices';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import IconExit from '../../assets/icon-exit.svg';
import { Container, Exit } from './style';

export default function Home() {
  const user = window.localStorage.getItem('user');
  return (
    <Container>
      <Header>
        <p>
          Olá,
          {' '}
          {user}
        </p>
        <Link to="/login">
          <Exit src={IconExit} alt="Icon to exit the App" />
        </Link>
      </Header>

      <Screen />

      <FinancialServices />
    </Container>
  );
}
