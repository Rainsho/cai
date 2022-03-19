import { Op } from '@sequelize/core';
import moment, { Moment } from 'moment';
import { Waterfall } from './models';
import { DateUnit, MonthBalance } from './types';

type CachedData = {
  monthBalances: MonthBalance[];
};

export const CACHE: CachedData = {
  monthBalances: [],
};

export async function flushCache() {
  // const dayOne = moment().startOf('month').toDate();

  // console.log(111, dayOne);

  // const details = await Waterfall.findAll({
  //   where: { occur: { [Op.gte]: dayOne } },
  // });
  // console.log(details.map(detail => detail.toJSON()));
  // console.log(
  //   details.map(detail => detail.toJSON()).reduce((acc, detail) => acc + detail.income, 0)
  // );
  // const sum = await Waterfall.sum('income', { where: { occur: { [Op.gte]: dayOne } } });
  // console.log(sum);

  // console.log(await calcMonthBalance(moment()));
  await flushMonthBalance();

  console.log(CACHE);
}

export async function flushMonthBalance() {
  const oldest: string = await Waterfall.min('occur');

  if (!oldest) return;

  let date = moment(oldest);
  const end = moment().endOf('month');
  const balances: MonthBalance[] = [];

  while (date.isBefore(end)) {
    const balance = await calcMonthBalance(date);
    balances.unshift(balance);
    date = date.add(1, 'month');
  }

  CACHE.monthBalances = balances;
}

export async function calcMonthBalance(date: Moment): Promise<MonthBalance> {
  const month = date.format('YYYY-MM');
  const start = date.startOf('month').toDate();
  const end = date.endOf('month').toDate();

  const records = await Waterfall.findAll({ where: { occur: { [Op.gte]: start, [Op.lte]: end } } });
  const result: MonthBalance = { unit: DateUnit.MONTH, date: month, income: 0, outcome: 0 };

  return records.reduce((acc, record) => {
    acc.income += record.income;
    acc.outcome += record.outcome;

    return acc;
  }, result);
}
