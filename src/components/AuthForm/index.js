import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Forms, ButtonSubmit, Label, Input,
} from './style';
import { AuthContext } from '../../contexts/authContext';
import { registerUser, loginUser } from '../../helpers/authHelpers';

export default function AuthForm({ signUp, login }) {
  const { auth, setAuth } = useContext(AuthContext);
  const [sucessLogin, setSucessLogin] = useState(false);
  const navigate = useNavigate();

  let typeForm;
  if (login) typeForm = false;
  if (signUp) typeForm = true;

  useEffect(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  });

  useEffect(() => {
    if (sucessLogin) {
      navigate('/home');
    }
  }, [sucessLogin]);

  function toRegister(e) {
    e.preventDefault();
    registerUser(auth).then(() => {
      setAuth({
        ...auth, email: '', password: '', repeatPassword: '',
      });
      navigate('/');
    });
  }
  function toLogin(e) {
    e.preventDefault();
    loginUser(auth).then((ans) => {
      setSucessLogin(true);
    });
  }
  return (
    <Forms onSubmit={(e) => (typeForm ? toRegister(e) : toLogin(e))}>
      {typeForm && (
        <Label label="id-name">
          <Input
            required
            text="Nome"
            id="id-name"
            onChange={(e) => setAuth({ ...auth, name: e.target.value })}
          />
        </Label>
      )}

      <Label label="id-email">
        <Input
          required
          text="E-mail"
          id="id-email"
          onChange={(e) => setAuth({ ...auth, email: e.target.value })}
        />
      </Label>

      <Label label="id-password">
        <Input
          required
          text="Senha"
          id="id-password"
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
        />
      </Label>

      {typeForm && (
        <Label label="id-repeat-password">
          <Input
            required
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
AuthForm.propTypes = {
  signUp: PropTypes.bool,
  login: PropTypes.bool,
};
