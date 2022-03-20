export const logger = (...args: any[]) => console.log(new Date(), ...args);

export function calcBalance<T extends { income: number; outcome: number }>(
  arr: T[]
): Array<T & { balance: number }> {
  let balance = 0;

  const list = arr
    .slice()
    .reverse()
    .map(x => {
      balance += x.income;
      balance -= x.outcome;

      return Object.assign(x, { balance });
    });

  return list.reverse();
}

export function displayCent(cent: number): number {
  return cent / 100;
}
