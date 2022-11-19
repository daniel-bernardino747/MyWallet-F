import { authRegister, authLogin } from '../services/POST';

export async function registerUser(auth) {
  const body = {
    name: auth.name,
    email: auth.email,
    password: auth.password,
  };

  return authRegister(body)
    .then((sucess) => sucess)
    .catch((error) => error);
}

export async function loginUser(auth) {
  const body = {
    email: auth.email,
    password: auth.password,
  };

  return authLogin(body).then((ans) => {
    console.log(ans);
    window.localStorage.setItem('token', ans.token);
    window.localStorage.setItem('user', ans.user);
    return ans;
  });
}
