import { Op, Order } from '@sequelize/core';
import moment, { Moment } from 'moment';
import { CACHE, calcAllBalance, flushCache } from './cache';
import { Account, Category, Label, Waterfall } from './models';
import { APIs } from './types';
import { calcBalance } from './utils';

export async function feed(): Promise<APIs.FEED> {
  if (CACHE.monthBalances.length === 0) {
    await flushCache();
  }

  const balances = CACHE.monthBalances;
  const { list } = await queryMonthList(moment());
  const meta = await queryMeta();

  return { balances, list, meta };
}

export async function queryMonthList(date: Moment): Promise<APIs.MONTH_LIST> {
  const month = date.format('YYYY-MM');
  const start = date.startOf('month').toDate();
  const end = date.endOf('month').toDate();
  const list = (
    await Waterfall.findAll({
      where: { occur: { [Op.gte]: start, [Op.lte]: end } },
      order: [['occur', 'DESC']],
      include: ['account', 'category', 'label'],
    })
  ).map(record => record.toJSON());

  return { date: month, list };
}

export async function queryMeta(): Promise<APIs.FEED['meta']> {
  const options = { order: [['sort', 'DESC']] as Order };
  const accounts = (await Account.findAll(options)).map(record => record.toJSON());
  const categories = (await Category.findAll(options)).map(record => record.toJSON());
  const labels = (await Label.findAll(options)).map(record => record.toJSON());

  return { accounts, categories, labels };
}

export async function accountFeed(): Promise<APIs.ACCOUNT_FEED> {
  if (CACHE.accountBalances.length === 0) {
    await flushCache();
  }

  const balances = CACHE.accountBalances;
  const all = await calcAllBalance();

  return { all, balances };
}

export async function queryAccountList(id: number): Promise<APIs.ACCOUNT_LIST | null> {
  if (!id) return null;

  const record = await Account.findByPk(id);

  if (!record) {
    return null;
  }

  const account = record.toJSON();
  const list = (
    await Waterfall.findAll({
      where: { aid: account.id },
      order: [['occur', 'DESC']],
      include: ['category', 'label'],
    })
  ).map(record => record.toJSON());

  return { account, list: calcBalance(list) };
}
