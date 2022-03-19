import { Op } from '@sequelize/core';
import moment from 'moment';
import { Waterfall } from './models';

export async function flushCache() {
  const dayOne = moment().startOf('month').toDate();

  console.log(dayOne);

  const details = await Waterfall.findAll({
    where: { occur: { [Op.gte]: dayOne } },
  });
  console.log(details.map(detail => detail.toJSON()));
}

flushCache();
