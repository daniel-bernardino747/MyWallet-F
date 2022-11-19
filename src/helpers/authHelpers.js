import { authRegister, authLogin } from '../services/POST';

export async function registerUser(auth) {
  const body = {
    name: auth.name,
    email: auth.email,
    password: auth.password,
  };

  return authRegister(body)
    .then((answer) => answer);
}

export async function loginUser(auth) {
  const body = {
    email: auth.email,
    password: auth.password,
  };

  return authLogin(body).then((answer) => {
    window.localStorage.setItem('token', answer.token);
    window.localStorage.setItem('user', answer.user);
    return answer;
  });
}
