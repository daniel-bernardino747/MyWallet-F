import { useEffect, useState } from 'react';
import {
  Container, Movement, Details, Time, Description, Value, Result, Label, ScrollBar, Alert,
} from './style';

export default function Screen() {
  const [balance, setBalance] = useState(0);
  const accountMovements = [];
  const noAccountMovement = accountMovements.length === 0;
  const formatResult = (num) => num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const formatNumber = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  useEffect(() => {
    if (!noAccountMovement) {
      const deposits = accountMovements
        .filter((m) => m.type === 'deposit')
        .map((m) => m.value)
        .reduce((sum, i) => sum + i);

      const withdrawals = accountMovements
        .filter((m) => m.type === 'withdrawal')
        .map((m) => m.value)
        .reduce((sum, i) => sum + i);

      setBalance(deposits - withdrawals);
    }
  }, []);

  return (
    <Container>
      {!noAccountMovement ? (
        <>
          <ScrollBar>
            {accountMovements.map((m) => (
              <Movement key={m.id}>
                <Details>
                  <Time>{m.date}</Time>
                  <Description>{m.details}</Description>
                </Details>
                <Value type={m.type === 'deposit'}>{formatNumber(m.value)}</Value>
              </Movement>
            ))}
          </ScrollBar>
          <Result>
            <Label>SALDO</Label>
            <Value type={balance > 0}>{formatResult(balance)}</Value>
          </Result>
        </>
      ) : (
        <Alert>
          Não há registros de
          entrada ou saída
        </Alert>
      )}
    </Container>
  );
}
