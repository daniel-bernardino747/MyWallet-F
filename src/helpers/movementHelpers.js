import dayjs from 'dayjs';
import { postTransaction } from '../services/POST';
import getMovements from '../services/GET';
import deleteTransactionById from '../services/DELETE';

export async function newMovement(deposit, isDeposit) {
  const token = window.localStorage.getItem('token');
  const { value, details } = deposit;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const dateToday = dayjs().format('DD/MM');

  const typeOfTransaction = isDeposit ? 'deposit' : 'withdrawal';

  const body = {
    date: dateToday,
    value,
    details,
    type: typeOfTransaction,
  };
  return postTransaction(body, config)
    .then((sucess) => sucess)
    .catch((error) => console.log(error));
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

export function balanceOfMovement(data) {
  if (data.length === 0) return 0;
  let balance;

  console.log('data', data);
  const deposits = data
    ?.filter((m) => m.type === 'deposit')
    ?.map((m) => m.value);

  console.log('deposits', deposits);

  const withdrawals = data
    ?.filter((m) => m.type === 'withdrawal')
    ?.map((m) => m.value);
  console.log('withdrawals', withdrawals);

  if (deposits.length === 0 && withdrawals.length === 0) {
    balance = 0;
  } if (deposits.length === 0) {
    balance = (0 - withdrawals.reduce((sum, i) => sum + i));
  } if (withdrawals.length === 0) {
    balance = deposits.reduce((sum, i) => sum + i);
  } else {
    balance = deposits.reduce((sum, i) => sum + i) - withdrawals.reduce((sum, i) => sum + i);
  }

  return balance;
}

export const formatResult = (num) => num
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatNumber = (num) => num
  .toLocaleString('pt-BR', { minimumFractionDigits: 2 });
