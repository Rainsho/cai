import { Op } from '@sequelize/core';
import moment, { Moment } from 'moment';
import { Account, Waterfall } from './models';
import { AccountBalance, Balance, BalanceType, MonthBalance } from './types';

type CachedData = {
  monthBalances: MonthBalance[];
  accountBalances: AccountBalance[];
};

export const CACHE: CachedData = {
  monthBalances: [],
  accountBalances: [],
};

export async function flushCache() {
  await flushMonthBalance();
  await flushAccountBalance();

  // console.log(CACHE);
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
  const result: MonthBalance = { type: BalanceType.MONTH, name: month, income: 0, outcome: 0 };

  return records.reduce((acc, record) => {
    acc.income += record.income;
    acc.outcome += record.outcome;

    return acc;
  }, result);
}

export async function flushAccountBalance() {
  const accounts = await Account.findAll({ where: { show: true } });
  const balances: AccountBalance[] = await Promise.all(accounts.map(calcAccountBalance));

  CACHE.accountBalances = balances;
}

export async function calcAccountBalance(account: Account): Promise<AccountBalance> {
  const aid = account.id;
  const income = (await Waterfall.sum('income', { where: { aid } })) || 0;
  const outcome = (await Waterfall.sum('outcome', { where: { aid } })) || 0;

  return { type: BalanceType.ACCOUNT, name: account.name, income, outcome, aid };
}

export async function calcAllBalance(): Promise<Balance<BalanceType.ALL>> {
  const accounts = await Account.findAll({ where: { net: false } });
  const aids = accounts.map(account => account.id);
  const income = (await Waterfall.sum('income', { where: { aid: { [Op.notIn]: aids } } })) || 0;
  const outcome = (await Waterfall.sum('outcome', { where: { aid: { [Op.notIn]: aids } } })) || 0;

  return { type: BalanceType.ALL, name: BalanceType.ALL, income, outcome };
}
