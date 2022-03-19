import type { NextApiRequest, NextApiResponse } from 'next';
import { flushCache } from '../../lib/cache';
import { insertSeeds } from '../../lib/seeds';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await insertSeeds(!!req.query?.seed && process.env.NODE_ENV !== 'production');
  await flushCache();
  res.write('DB is initialized');
  res.end();
}
