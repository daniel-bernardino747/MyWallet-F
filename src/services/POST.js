import axios from 'axios';

const defaultPath = 'http://localhost:5000';

export async function authRegister(body) {
  return axios.post(`${defaultPath}/sign-up`, body)
    .then((sucess) => sucess)
    .catch(((error) => {
      alert(error.response.data.error);
      return false;
    }));
}
export function authLogin(body) {
  return axios.post(`${defaultPath}/sign-in`, body)
    .then((ans) => ans.data)
    .catch(((error) => {
      alert(error.response.data.error);
      return false;
    }));
}
export async function postTransaction(body, config) {
  return axios.post(`${defaultPath}/transactions`, body, config)
    .then((sucess) => sucess)
    .catch(((error) => {
      alert(error.response.data.error);
      return false;
    }));
}
