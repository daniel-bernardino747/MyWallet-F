import { useContext, useEffect, useState } from 'react';
import { balanceOfMovement } from '../../helpers/movementHelpers';
import getMovements from '../../services/GET';
import FinancialHistoric from '../FinancialHistoric';
import * as s from './style';
import { AuthContext } from '../../contexts/authContext';

export default function Screen() {
  const [balance, setBalance] = useState(0);
  const [accountMovements, setAccountMovements] = useState([]);
  const noAccountMovement = accountMovements.length === 0;
  const { auth: { token } } = useContext(AuthContext);

  useEffect(() => {
    if (!noAccountMovement) {
      const newBalance = balanceOfMovement(accountMovements);
      setBalance(newBalance);
    }
  }, [accountMovements]);

  useEffect(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const allMovements = await getMovements(config);
    setAccountMovements(allMovements);
  }, []);

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
