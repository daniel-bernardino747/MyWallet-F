import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconExit from '../../assets/icon-exit.svg';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import FinancialServices from '../../components/FinancialServices';

import { Container, Exit } from './style';

export default function Home() {
  const [user, setUser] = useState(window.localStorage.getItem('user'));
  const navigate = useNavigate();

  function exitSession() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <Container>
      <Header>
        <p>
          Olá,
          {' '}
          {user}
        </p>
        <Exit onClick={() => exitSession()} src={IconExit} alt="Icon to exit the App" />
      </Header>

      <Screen />

      <FinancialServices />
    </Container>
  );
}
