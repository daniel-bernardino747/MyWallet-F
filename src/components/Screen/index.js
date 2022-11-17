import { useEffect, useState } from 'react';
import { balanceOfMovement } from '../../helpers/movementHelpers';
import FinancialHistoric from '../FinancialHistoric';
import * as s from './style';

export default function Screen() {
  const [balance, setBalance] = useState(0);
  const accountMovements = [];
  const noAccountMovement = accountMovements.length === 0;

  useEffect(() => {
    if (!noAccountMovement) {
      setBalance(balanceOfMovement(accountMovements));
    }
  }, [accountMovements]);

  return (
    <s.Container>
      {!noAccountMovement ? (
        <FinancialHistoric data={accountMovements} balance={balance} />
      ) : (
        <s.Alert>
          Não há registros de
          entrada ou saída
        </s.Alert>
      )}
    </s.Container>
  );
}
