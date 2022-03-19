import { Op } from '@sequelize/core';
import moment, { Moment } from 'moment';
import { CACHE, flushCache } from './cache';
import { Waterfall } from './models';
import { APIs } from './types';

export async function feed(): Promise<APIs.FEED> {
  if (CACHE.monthBalances.length === 0) {
    await flushCache();
  }

  const balances = CACHE.monthBalances;
  const { list } = await queryMonthList(moment());

  return { balances, list };
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
