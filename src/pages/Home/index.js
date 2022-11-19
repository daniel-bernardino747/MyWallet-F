import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconExit from '../../assets/icon-exit.svg';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import FinancialServices from '../../components/FinancialServices';

import { Container, Exit } from './style';

export default function Home() {
  const [user, setUser] = useState(window.localStorage.getItem('user'));
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
