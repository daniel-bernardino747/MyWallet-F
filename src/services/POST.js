import axios from 'axios';

const defaultPath = '';

export async function authRegister(body) {
  await axios.post(defaultPath, body)
    .then((sucess) => sucess)
    .catch(((error) => error));
}
export async function authLogin(body) {
  await axios.post(defaultPath, body)
    .then((token) => token)
    .catch(((error) => error));
}
export async function postTransaction(body, config) {
  await axios.post(defaultPath, body, config)
    .then((sucess) => sucess)
    .catch(((error) => error));
}
