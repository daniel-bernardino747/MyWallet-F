import IconExit from '../../assets/icon-exit.svg';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import FinancialServices from '../../components/FinancialServices';

import { Container, Exit } from './style';

export default function Home() {
  return (
    <Container>
      <Header>
        Olá, Fulano
        <Exit src={IconExit} alt="Icon to exit the App" />
      </Header>

      <Screen />

      <FinancialServices />
    </Container>
  );
}
