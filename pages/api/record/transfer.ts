import { Op } from '@sequelize/core';
import type { NextApiRequest, NextApiResponse } from 'next';
import { flushCache } from '../../../lib/cache';
import { Category, Waterfall } from '../../../lib/models';
import { APIs, CategoryType, TransferHelper } from '../../../lib/types';
import { logger } from '../../../lib/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' || req.method === 'PUT') {
    const payload: APIs.UPSERT_WATERFALL & TransferHelper & { id?: number } = req.body;
    const { id, aid, aid_out, aid_in, amount: _amount, lid, occur, ps, type } = payload;
    const amount = +_amount * 100;

    if (amount <= 0) {
      logger('Invalid record', payload);
      res.status(422).json({ message: 'Invalid record' });
      return;
    }

    if (!id && type === CategoryType.TRANSFER) {
      const c_out = await Category.findOne({ where: { type: CategoryType.TRANSFER_OUT } });
      const c_in = await Category.findOne({ where: { type: CategoryType.TRANSFER_IN } });

      const recordOut = {
        lid,
        occur,
        ps,
        aid: aid_out,
        type: CategoryType.TRANSFER_OUT,
        outcome: amount,
        income: 0,
        cid: c_out!.id,
      };
      const recordIn = {
        ...recordOut,
        aid: aid_in,
        type: CategoryType.TRANSFER_IN,
        outcome: 0,
        income: amount,
        cid: c_in!.id,
      };

      const result = await Waterfall.bulkCreate([recordOut, recordIn]);
      result[0].tid = result[1].id;
      result[1].tid = result[0].id;
      await result[0].save();
      await result[1].save();

      await flushCache();
      res.json(result);
      return;
    }

    if (id && (type === CategoryType.TRANSFER_OUT || type === CategoryType.TRANSFER_IN)) {
      const record = await Waterfall.findByPk(id);

      if (record) {
        const amountKey = type === CategoryType.TRANSFER_OUT ? 'outcome' : 'income';
        record.aid = aid;
        record.lid = lid;
        record[amountKey] = amount;
        record.occur = occur || record.occur;
        record.ps = ps || record.ps;

        const result = await record.save();
        await flushCache();
        res.json(result.toJSON());
        return;
      }
    }
  }

  if (req.method === 'DELETE') {
    const record = await Waterfall.findByPk(+req.body.id);

    if (record) {
      const result = await Waterfall.destroy({
        where: { [Op.or]: [{ id: record.id }, { id: record.tid }] },
      });
      await flushCache();
      res.json({ result });
      return;
    }

    res.status(204).end();
    return;
  }

  res.status(405).json({ message: 'Method not allowed' });
  return;
}
