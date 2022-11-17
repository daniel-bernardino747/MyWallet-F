import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import { Title, SignUp } from '../../components/AuthForm/style';

export default function Register() {
  return (
    <>
      <Title>MyWallet</Title>
      <AuthForm signUp />

      <Link style={{ textDecoration: 'none' }} to="/">
        <SignUp>Já tem uma conta? Entre agora!</SignUp>
      </Link>
    </>
  );
}
