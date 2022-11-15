import PropTypes from 'prop-types';

export default function ModelForm({ children, signUp }) {
  function bla() {
    return true;
  }
  function ble() {
    return false;
  }
  return (
    <>
      <form onSubmit={() => (signUp ? bla() : ble())}>
        {children}
      </form>
      <input type="submit" value={signUp ? 'Cadastrar' : 'Entrar'} />
    </>
  );
}

ModelForm.propTypes = {
  children: PropTypes.any,
  signUp: PropTypes.bool,
};
