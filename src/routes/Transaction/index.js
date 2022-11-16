import { useContext } from 'react';
import styled from 'styled-components';

import { TransactionContext } from '../../contexts/TransactionContext';

import Header from '../../components/Header';
import TransactionForm from '../../components/TransactionForm';

export default function Transaction() {
  const { isDeposit } = useContext(TransactionContext);

  return (
    <Container>
      <Header>
        {isDeposit ? 'Nova Entrada' : 'Nova Saida'}
      </Header>
      <TransactionForm isDeposit={isDeposit} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
