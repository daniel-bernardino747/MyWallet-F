import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import IconPlus from '../../assets/plus-circle.svg';
import IconMinus from '../../assets/minus-circle.svg';
import * as s from './style';
import { TransactionContext } from '../../contexts/TransactionContext';

export default function FinancialServices() {
  const { isDeposit, setIsDeposit } = useContext(TransactionContext);
  const navigate = useNavigate();

  function goToDeposit() {
    setIsDeposit(true);
    navigate('/transaction');
  }
  function goToWithdrawal() {
    setIsDeposit(false);
    navigate('/transaction');
  }
  return (
    <s.Container>
      <s.Button onClick={goToDeposit}>
        <s.Icon src={IconPlus} />
        <s.TextAction>Nova Entrada</s.TextAction>
      </s.Button>
      <s.Button onClick={goToWithdrawal}>
        <s.Icon src={IconMinus} />
        <s.TextAction>Nova Saída</s.TextAction>
      </s.Button>
    </s.Container>
  );
}
