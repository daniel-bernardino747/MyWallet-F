import PropTypes from 'prop-types';
import {
  Forms, ButtonSubmit, Label, Input,
} from './style';

export default function TransactionForm({ isDeposit }) {
  function bla() {
    return true;
  }
  function ble() {
    return false;
  }
  return (
    <Forms onSubmit={() => (isDeposit ? bla() : ble())}>

      <Label label="id-value">
        <Input text="Valor" id="id-value" />
      </Label>
      <Label label="id-description">
        <Input text="Descrição" id="id-description" />
      </Label>

      <ButtonSubmit value={isDeposit ? 'Salvar Entrada' : 'Salvar Saída'} />
    </Forms>
  );
}

TransactionForm.propTypes = {
  isDeposit: PropTypes.bool,
};
