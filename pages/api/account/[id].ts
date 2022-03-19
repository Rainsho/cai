import { NextApiRequest, NextApiResponse } from 'next';
import { queryAccountList } from '../../../lib/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = +req.query.id;
  const result = await queryAccountList(id);

  if (result) {
    res.json(result);
    return;
  }

  res.status(204);
  res.end();
}
