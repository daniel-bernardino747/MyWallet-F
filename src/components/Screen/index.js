import { useEffect, useState } from 'react';
import { getUsersMovements } from '../../helpers/movementHelpers';
import FinancialHistoric from '../FinancialHistoric';
import * as s from './style';

export default function Screen() {
  const [balance, setBalance] = useState(0);
  const [accountMovements, setAccountMovements] = useState();
  const [historic, setHistoric] = useState(false);

  useEffect(() => {
    getUsersMovements()
      .then((movements) => {
        setAccountMovements(movements.data);
        setBalance(movements.balance);
      });
  }, [historic]);

  return (
    <s.Container>
      {(accountMovements?.length > 0) ? (
        <FinancialHistoric
          data={accountMovements}
          balance={balance}
          setHistoric={setHistoric}
          historic={historic}
        />
      ) : (
        <s.Alert>
          Não há registros de
          entrada ou saída
        </s.Alert>
      )}
    </s.Container>
  );
}
