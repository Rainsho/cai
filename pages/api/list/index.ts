import { NextApiRequest, NextApiResponse } from 'next';
import { feed } from '../../../lib/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await feed();
  res.json(result);
}
