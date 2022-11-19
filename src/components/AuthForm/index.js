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
    setAuth({
      ...auth, name: '', email: '', password: '', repeatPassword: '',
    });
  }, []);

  useEffect(() => {
    if (sucessLogin) {
      setTimeout(() => (navigate('/')), 5000);
    }
  });

  function toRegister(e) {
    e.preventDefault();
    const differentPasswords = auth.password !== auth.repeatPassword;

    if (differentPasswords) {
      alert('Passwords must be the same');
      setAuth({ ...auth, password: '', repeatPassword: '' });
      return;
    }
    registerUser(auth).then((answer) => {
      if (answer) {
        setAuth({
          ...auth, email: '', password: '', repeatPassword: '',
        });
        navigate('/');
      }
    });
  }
  function toLogin(e) {
    e.preventDefault();
    loginUser(auth).then((answer) => {
      if (answer) {
        return setSucessLogin(true);
      }
      return setAuth({ ...auth, password: '' });
    });
  }
  return (
    <Forms onSubmit={(e) => (typeForm ? toRegister(e) : toLogin(e))}>
      {typeForm && (
        <Label label="id-name">
          <Input
            required
            value={auth.name}
            type="text"
            detail="Nome"
            id="id-name"
            onChange={(e) => setAuth({ ...auth, name: e.target.value })}
          />
        </Label>
      )}

      <Label label="id-email">
        <Input
          required
          value={auth.email}
          type="text"
          detail="E-mail"
          id="id-email"
          onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          disabled={sucessLogin}
        />
      </Label>

      <Label label="id-password">
        <Input
          required
          value={auth.password}
          type="password"
          detail="Senha"
          id="id-password"
          onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          disabled={sucessLogin}
        />
      </Label>

      {typeForm && (
        <Label label="id-repeat-password">
          <Input
            required
            value={auth.repeatPassword}
            type="password"
            detail="Confirme a senha"
            id="id-repeat-password"
            onChange={(e) => setAuth(
              { ...auth, repeatPassword: e.target.value },
            )}
          />
        </Label>
      )}
      <ButtonSubmit
        value={typeForm ? 'Cadastrar' : 'Entrar'}
        disabled={sucessLogin}
      />
    </Forms>
  );
}
AuthForm.propTypes = {
  signUp: PropTypes.bool,
  login: PropTypes.bool,
};
