import axios from 'axios';
import defaultPath from '../constants/defaultpath';

export default async function getMovements(config) {
  return axios.get(`${defaultPath}/transactions`, config)
    .then((answer) => answer.data.message)
    .catch(((error) => {
      alert(error.message);
      return false;
    }));
}
