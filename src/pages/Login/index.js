import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';
import { Title, SignUp } from '../../components/AuthForm/style';

export default function Login() {
  return (
    <>
      <Title>MyWallet</Title>
      <AuthForm login />

      <Link style={{ textDecoration: 'none' }} to="/sign-up">
        <SignUp>Primeira vez? Cadastre-se!</SignUp>
      </Link>
    </>
  );
}
