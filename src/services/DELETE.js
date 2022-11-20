import axios from 'axios';

const defaultPath = 'http://localhost:5000';

export default async function deleteTransactionById(id, config) {
  return axios.delete(`${defaultPath}/transactions/${id}`, config)
    .then((answer) => answer)
    .catch(((error) => {
      alert(error.response.data.error);
      return false;
    }));
}
