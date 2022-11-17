import { Link } from 'react-router-dom';
import ModelForm from '../../components/ModelForm';
import { Title, SignUp } from '../../components/ModelForm/style';

export default function Login() {
  return (
    <>
      <Title>MyWallet</Title>
      <ModelForm login />

      <Link style={{ textDecoration: 'none' }} to="/sign-up">
        <SignUp>Primeira vez? Cadastre-se!</SignUp>
      </Link>
    </>
  );
}
