import PropTypes from 'prop-types';
import * as s from './style';
import { deleteTransaction, formatNumber, formatResult } from '../../helpers/movementHelpers';

export default function FinancialHistoric({
  data, balance, setHistoric, historic,
}) {
  const balancePositive = balance > 0;

  const deleteTransactionAndUpdate = async (id) => {
    if (window.confirm('Confirme a remoção dessa transação.')) {
      deleteTransaction(id).then(() => {
        setHistoric(!historic);
      });
    }
  };

  return (
    <>
      <s.ScrollBar>
        {data.map((m) => (
          <s.Movement key={m._id}>
            <s.Details>
              <s.Time>{m.date}</s.Time>
              <s.Description>{m.details}</s.Description>
            </s.Details>
            <s.Box>
              <s.Value type={m.type === 'deposit'}>{formatNumber(m.value)}</s.Value>
              <s.DeleteButton onClick={() => deleteTransactionAndUpdate(m._id)}>X</s.DeleteButton>
            </s.Box>
          </s.Movement>
        ))}
      </s.ScrollBar>
      <s.Result>
        <s.Label>SALDO</s.Label>
        <s.Value type={balancePositive}>{formatResult(balance)}</s.Value>
      </s.Result>
    </>
  );
}
FinancialHistoric.propTypes = {
  data: PropTypes.array,
  balance: PropTypes.number,
  setHistoric: PropTypes.any,
  historic: PropTypes.bool,
};
