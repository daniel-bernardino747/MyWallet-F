import PropTypes from 'prop-types';
import * as s from './style';
import { formatNumber, formatResult } from '../../helpers/movementHelpers';

export default function FinancialHistoric({ data, balance }) {
  return (
    <>
      <s.ScrollBar>
        {data.map((m) => (
          <s.Movement key={m.id}>
            <s.Details>
              <s.Time>{m.date}</s.Time>
              <s.Description>{m.details}</s.Description>
            </s.Details>
            <s.Value type={m.type === 'deposit'}>{formatNumber(m.value)}</s.Value>
          </s.Movement>
        ))}
      </s.ScrollBar>
      <s.Result>
        <s.Label>SALDO</s.Label>
        <s.Value type={balance > 0}>{formatResult(balance)}</s.Value>
      </s.Result>
    </>
  );
}
FinancialHistoric.propTypes = {
  data: PropTypes.array,
  balance: PropTypes.number,
};
