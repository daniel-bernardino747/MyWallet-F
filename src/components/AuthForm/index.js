import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';
import {
  Forms, ButtonSubmit, Label, Input,
} from './style';
import { registerUser, loginUser } from '../../helpers/authHelpers';

export default function AuthForm({ signUp, login }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState,
  } = useForm();
  const { isSubmitting, errors } = formState;
  let watchPassword;
  let typeForm = false;

  if (login) typeForm = false;
  if (signUp) typeForm = true;
  if (typeForm) watchPassword = watch('password');

  useEffect(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  }, []);

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

  const notSubmitting = () => (typeForm ? 'Cadastrar' : 'Entrar');

  return (
    <Forms onSubmit={(handleSubmit(onSubmit))}>
      {typeForm && (
        <Label label="id-name">
          <Input
            error={errors?.name}
            type="text"
            detail="Nome"
            {...register('name', { required: true })}
          />
          {errors?.name?.type === 'required' && (
          <p>Name is required.</p>
          )}
        </Label>
      )}

      <Label label="id-email">
        <Input
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
      </Label>

      <Label label="id-password">
        <Input
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
      </Label>

      {typeForm && (
        <Label label="id-repeat-password">
          <Input
            type="password"
            detail="Confirme a senha"
            {...register('passwordConfirmation', { required: true, validate: (value) => value === watchPassword })}
          />
          {errors?.passwordConfirmation?.type === 'required' && (
          <p>Password needs to have at least 5 characters.</p>
          )}
          {errors?.passwordConfirmation?.type === 'validate' && (
          <p>Passwords does not match.</p>
          )}
        </Label>
      )}
      <ButtonSubmit
        disabled={isSubmitting}
        value={isSubmitting ? 'Carregando...' : notSubmitting()}
      />
    </Forms>
  );
}
AuthForm.propTypes = {
  signUp: PropTypes.bool,
  login: PropTypes.bool,
};
