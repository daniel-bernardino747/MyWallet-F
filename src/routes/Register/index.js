import { Link } from 'react-router-dom';
import ModelForm from '../../components/ModelForm';
import {
  Title, Input, Label, SignUp,
} from '../../components/ModelForm/style';

export default function Register() {
  return (
    <>
      <Title>MyWallet</Title>
      <ModelForm signUp>

        <Label label="id-name">
          <Input text="Nome" id="id-name" />
        </Label>

        <Label label="id-email">
          <Input text="E-mail" id="id-email" />
        </Label>

        <Label label="id-password">
          <Input text="Senha" id="id-password" />
        </Label>

        <Label label="id-repeat-password">
          <Input text="Confirme a senha" id="id-repeat-password" />
        </Label>

      </ModelForm>
      <Link
        style={{ textDecoration: 'none' }}
        to="/"
      >
        <SignUp>Já tem uma conta? Entre agora!</SignUp>
      </Link>
    </>
  );
}
