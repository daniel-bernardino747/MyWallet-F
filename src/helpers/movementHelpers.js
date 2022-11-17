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
