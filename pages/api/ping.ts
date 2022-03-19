import type { NextApiRequest, NextApiResponse } from 'next';
import { flushCache } from '../../lib/cache';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  flushCache();
  res.write('pong');
  res.end();
}
