import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { newMovement } from '../../helpers/movementHelpers';
import * as s from './style';

export default function TransactionForm({ isDeposit }) {
  const [newTransaction, setNewTransaction] = useState({});
  const navigate = useNavigate();

  async function sendTransaction(e) {
    e.preventDefault();

    newMovement(newTransaction, isDeposit)
      .then(() => setNewTransaction({}));
    navigate('/');
  }

  return (
    <s.Forms onSubmit={sendTransaction}>

      <s.Label label="id-value">
        <s.InputNumber
          required
          text="Valor"
          id="id-value"
          step="any"
          onChange={(e) => setNewTransaction(
            { ...newTransaction, value: Number(e.target.value) },
          )}
        />
      </s.Label>
      <s.Label label="id-description">
        <s.Input
          required
          text="Descrição"
          id="id-description"
          onChange={(e) => setNewTransaction(
            { ...newTransaction, details: e.target.value },
          )}
        />
      </s.Label>
      <s.BoxButtons>
        <s.ButtonExit value="Voltar" onClick={() => navigate(-1)} />
        <s.ButtonSubmit value={isDeposit ? 'Salvar Entrada' : 'Salvar Saída'} />
      </s.BoxButtons>
    </s.Forms>
  );
}

TransactionForm.propTypes = {
  isDeposit: PropTypes.bool,
};
