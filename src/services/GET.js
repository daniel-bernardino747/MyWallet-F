import axios from 'axios';

const defaultPath = '';

export default async function getMovements(config) {
  await axios.get(defaultPath, config)
    .then((allMovements) => allMovements)
    .catch(((error) => error));
}
