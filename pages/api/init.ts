import type { NextApiRequest, NextApiResponse } from 'next';
import { initDB } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await initDB(!!req.query?.seed);
  res.write('DB is initialized');
  res.end();
}
