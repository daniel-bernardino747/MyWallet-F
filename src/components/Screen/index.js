import { useEffect, useState } from 'react';
import { balanceOfMovement, getUsersMovements } from '../../helpers/movementHelpers';
import FinancialHistoric from '../FinancialHistoric';
import * as s from './style';

export default function Screen() {
  const [balance, setBalance] = useState(0);
  const [accountMovements, setAccountMovements] = useState();
  const [historic, setHistoric] = useState(false);

  useEffect(() => {
    getUsersMovements()
      .then((movements) => {
        setAccountMovements(movements);
      });
  }, [historic]);

  useEffect(() => {
    if (accountMovements) {
      const newBalance = balanceOfMovement(accountMovements);
      setBalance(newBalance);
      console.log(accountMovements);
      console.log('balance', newBalance);
    }
  }, [accountMovements]);

  console.log('accountMovements: ', accountMovements);
  return (
    <s.Container>
      {(accountMovements) ? (
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
