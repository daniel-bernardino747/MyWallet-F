import { Link } from 'react-router-dom';
import ModelForm from '../../components/ModelForm';
import {
  Title, Input, Label, SignUp,
} from './style';

export default function Login() {
  return (
    <>
      <Title>MyWallet</Title>
      <ModelForm signUp={false}>
        <Label label="id-email">
          <Input
            text="E-mail"
            id="id-email"
          />
        </Label>
        <Label label="id-password">
          <Input
            text="Senha"
            id="id-password"
          />
        </Label>
      </ModelForm>
      <Link
        style={{ textDecoration: 'none' }}
        to="/sign-up"
      >
        <SignUp>Primeira vez? Cadastre-se!</SignUp>
      </Link>
    </>
  );
}
