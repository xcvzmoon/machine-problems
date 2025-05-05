export function sumParts(ls: number[]): number[] {
  const sums: number[] = [];

  let sum = ls.reduce((previous, current) => previous + current);

  sums.push(sum);

  ls.forEach((_, index) => {
    if (ls[index] === undefined) return;

    sum -= ls[index];
    sums.push(sum);
  });

  return sums;
}
