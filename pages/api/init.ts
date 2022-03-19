import type { NextApiRequest, NextApiResponse } from 'next';
import { insertSeeds } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await insertSeeds(!!req.query?.seed && process.env.NODE_ENV !== 'production');
  res.write('DB is initialized');
  res.end();
}
