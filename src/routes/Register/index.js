import { Link } from 'react-router-dom';
import ModelForm from '../../components/ModelForm';
import { Title, SignUp } from '../../components/ModelForm/style';

export default function Register() {
  return (
    <>
      <Title>MyWallet</Title>
      <ModelForm signUp />

      <Link style={{ textDecoration: 'none' }} to="/">
        <SignUp>Já tem uma conta? Entre agora!</SignUp>
      </Link>
    </>
  );
}
