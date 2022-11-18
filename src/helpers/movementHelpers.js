import dayjs from 'dayjs';
import { postTransaction } from '../services/POST';

export async function newMovement(deposit, token, isDeposit) {
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
  const sucess = await postTransaction(body, config);
  return sucess;
}

export async function balanceOfMovement(data) {
  const deposits = data
    ?.filter((m) => m.type === 'deposit')
    ?.map((m) => m.value)
    ?.reduce((sum, i) => sum + i);

  const withdrawals = data
    ?.filter((m) => m.type === 'withdrawal')
    ?.map((m) => m.value)
    ?.reduce((sum, i) => sum + i);

  return (deposits - withdrawals);
}

export const formatResult = (num) => num
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatNumber = (num) => num
  .toLocaleString('pt-BR', { minimumFractionDigits: 2 });
