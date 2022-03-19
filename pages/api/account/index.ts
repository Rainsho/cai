import { NextApiRequest, NextApiResponse } from 'next';
import { accountFeed } from '../../../lib/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await accountFeed();
  res.json(result);
}
