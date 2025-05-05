export function getTotalAverageEarnings(
  expenses: number,
  expeditions: string[],
): string {
  let totalEarnings = 0;
  const numDays = expeditions.length;

  expeditions.forEach((expedition) => {
    const [hours = '0', path = '', price = '0'] = expedition.split(' ');

    let bottles = 0;
    let index = 0;

    for (let i = 0; i < parseInt(hours, 10); i++) {
      if (path[index] === 'B') bottles++;
      index = (index + 1) % path.length;
    }

    totalEarnings += bottles * parseFloat(price);
  });

  const averageEarnings = totalEarnings / numDays;
  const dailyExpensesTotal = expenses * numDays;

  if (averageEarnings > expenses) {
    return `Good earnings. Extra money per day: ${(
      averageEarnings - expenses
    ).toFixed(2)}`;
  } else {
    return `Hard times. Money needed: ${(
      dailyExpensesTotal - totalEarnings
    ).toFixed(2)}`;
  }
}
