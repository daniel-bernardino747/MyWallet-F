import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Forms, ButtonSubmit, Label, Input,
} from './style';
import { AuthContext } from '../../contexts/authContext';
import { registerUser } from '../../helpers/authHelpers';

export default function ModelForm({ signUp, login }) {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  let typeForm;
  if (login) typeForm = false;
  if (signUp) typeForm = true;

  async function toRegister(e) {
    e.preventDefault();
    registerUser(auth).then((token) => {
      setAuth({
        token, name: '', email: '', password: '', repeatPassword: '',
      });
    });
    navigate('/');
  }
  function ble() {
    return false;
  }
  return (
    <Forms onSubmit={(e) => (typeForm ? toRegister(e) : ble(e))}>
      {typeForm && (
        <Label label="id-name">
          <Input
            text="Nome"
            id="id-name"
            onChange={(e) => setAuth({ ...auth, name: e.target.value })}
          />
        </Label>
      )}

      <Label label="id-email">
        <Input
          text="E-mail"
          id="id-email"
          onChange={(e) => setAuth({ ...auth, email: e.target.value })}
        />
      </Label>

      <Label label="id-password">
        <Input
          text="Senha"
          id="id-password"
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        />
      </Label>

      {typeForm && (
        <Label label="id-repeat-password">
          <Input
            text="Confirme a senha"
            id="id-repeat-password"
            onChange={(e) => setAuth(
              { ...auth, repeatPassword: e.target.value },
            )}
          />
        </Label>
      )}
      <ButtonSubmit value={typeForm ? 'Cadastrar' : 'Entrar'} />
    </Forms>
  );
}
ModelForm.propTypes = {
  signUp: PropTypes.bool,
  login: PropTypes.bool,
};
