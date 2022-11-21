import axios from 'axios';
import defaultPath from '../constants/defaultpath';

export default async function deleteTransactionById(id, config) {
  return axios.delete(`${defaultPath}/transactions/${id}`, config)
    .then((answer) => answer)
    .catch(((error) => {
      alert(error.response.data.error);
      return false;
    }));
}
