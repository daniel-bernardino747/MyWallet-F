import PropTypes from 'prop-types';
import { Forms, ButtonSubmit } from './style';

export default function ModelForm({ children, signUp }) {
  function bla() {
    return true;
  }
  function ble() {
    return false;
  }
  return (
    <Forms onSubmit={() => (signUp ? bla() : ble())}>
      {children}
      <ButtonSubmit value={signUp ? 'Cadastrar' : 'Entrar'} />
    </Forms>
  );
}

ModelForm.propTypes = {
  children: PropTypes.any,
  signUp: PropTypes.bool,
};
