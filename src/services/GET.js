import axios from 'axios';

const defaultPath = 'http://localhost:5000';

export default async function getMovements(config) {
  return axios.get(`${defaultPath}/transactions`, config)
    .then((answer) => answer.data.message)
    .catch(((error) => alert(error.message)));
}
