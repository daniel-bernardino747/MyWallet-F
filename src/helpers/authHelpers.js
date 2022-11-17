import { authRegister } from '../services/POST';

export async function registerUser(auth) {
  const body = { name: auth.name, email: auth.email, password: auth.password };

  try {
    const sucess = 'sucess'; // await authRegister(body);
    return sucess;
  } catch (err) {
    return err;
  }
}

export async function loginUser(auth) {
  const body = { email: auth.email, password: auth.password };

  try {
    const token = '143fde23'; // await
    return token;
  } catch (err) {
    return err;
  }
}
