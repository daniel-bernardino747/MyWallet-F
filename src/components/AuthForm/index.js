import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';
import { isEmail } from 'validator';
import { registerUser, loginUser } from '../../helpers/authHelpers';
import * as s from './style';

export default function AuthForm({ signUp, login }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState,
  } = useForm();
  const { isSubmitting, errors } = formState;
  let typeForm = false;
  let watchPassword;

  if (login) typeForm = false;
  if (signUp) typeForm = true;
  if (typeForm) watchPassword = watch('password');

  const notSubmitting = () => (typeForm ? 'Cadastrar' : 'Entrar');

  if (window.localStorage.getItem('token')) {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  }

  function onSubmit(data) {
    return new Promise(() => {
      if (typeForm) {
        const differentPasswords = data.password !== data.passwordConfirmation;
        if (differentPasswords) alert('Passwords must be the same');

        registerUser(data).then((sucess) => {
          if (sucess) navigate('/');
        });
      } else {
        loginUser(data).then((sucess) => {
          if (sucess) setTimeout(() => (navigate('/')), 3000);
        });
      }
    });
  }

  return (
    <s.Forms onSubmit={(handleSubmit(onSubmit))}>
      {typeForm && (
        <s.Label label="id-name">
          <s.Input
            error={errors?.name}
            type="text"
            detail="Nome"
            {...register('name', { required: true })}
          />
          {errors?.name?.type === 'required' && (
          <p>Name is required.</p>
          )}
        </s.Label>
      )}

      <s.Label label="id-email">
        <s.Input
          type="text"
          detail="E-mail"
          {...register('email', { required: true, validate: (value) => isEmail(value) })}
        />
        {errors?.email?.type === 'required' && (
          <p>Email is required.</p>
        )}
        {errors?.email?.type === 'validate' && (
          <p>Email is invalid.</p>
        )}
      </s.Label>

      <s.Label label="id-password">
        <s.Input
          type="password"
          detail="Senha"
          {...register('password', { required: true, minLength: 3 })}
        />
        {errors?.password?.type === 'required' && (
          <p>Password is required.</p>
        )}
        {errors?.password?.type === 'minLength' && (
          <p>Password needs to have at least 3 characters.</p>
        )}
      </s.Label>

      {typeForm && (
        <s.Label label="id-password-confirmation">
          <s.Input
            type="password"
            detail="Confirme a senha"
            {...register(
              'passwordConfirmation',
              { required: true, validate: (value) => value === watchPassword },
            )}
          />
          {errors?.passwordConfirmation?.type === 'required' && (
          <p>Password needs to have at least 5 characters.</p>
          )}
          {errors?.passwordConfirmation?.type === 'validate' && (
          <p>Passwords does not match.</p>
          )}
        </s.Label>
      )}
      <s.ButtonSubmit
        disabled={isSubmitting}
        value={isSubmitting ? 'Carregando...' : notSubmitting()}
      />
    </s.Forms>
  );
}
AuthForm.propTypes = {
  signUp: PropTypes.bool,
  login: PropTypes.bool,
};
