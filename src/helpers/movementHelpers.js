import dayjs from 'dayjs';
import { postTransaction } from '../services/POST';
import getMovements from '../services/GET';
import deleteTransactionById from '../services/DELETE';

export async function newMovement(data, isDeposit) {
  const token = window.localStorage.getItem('token');
  const { value, description: details } = data;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const dateToday = dayjs().format('DD/MM');

  const typeOfTransaction = isDeposit ? 'deposit' : 'withdrawal';

  const body = {
    date: dateToday,
    value: Number(value),
    details,
    type: typeOfTransaction,
  };
  return postTransaction(body, config).then((sucess) => sucess);
}

export async function getUsersMovements() {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return getMovements(config).then((answer) => answer);
}

export async function deleteTransaction(id) {
  const token = window.localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return deleteTransactionById(id, config).then((answer) => answer);
}

export const formatResult = (num) => num
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatNumber = (num) => num
  .toLocaleString('pt-BR', { minimumFractionDigits: 2 });
