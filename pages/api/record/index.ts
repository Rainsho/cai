import type { NextApiRequest, NextApiResponse } from 'next';
import { flushCache } from '../../../lib/cache';
import { Waterfall } from '../../../lib/models';
import { APIs } from '../../../lib/types';
import { logger } from '../../../lib/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST' || req.method === 'PUT') {
    const payload: APIs.UPSERT_WATERFALL = req.body;
    const record = Waterfall.extractProps(payload);

    if (!record) {
      logger('Invalid record', payload);
      res.status(422).json({ message: 'Invalid record' });
      return;
    }

    const [result] = await Waterfall.upsert(record);
    await flushCache();
    res.json(result.toJSON());
    return;
  }

  if (req.method === 'DELETE') {
    const result = await Waterfall.destroy({ where: { id: +req.body.id } });
    await flushCache();
    res.json({ result });
    return;
  }

  res.status(405).json({ message: 'Method not allowed' });
  return;
}
