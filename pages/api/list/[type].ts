import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import { feed, queryMonthList } from '../../../lib/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = req.query.type?.toString();

  if (type.toUpperCase() === 'FEED') {
    const result = await feed();
    res.json(result);
    return;
  }

  if (/^\d{4}\-\d{2}$/.test(type)) {
    const result = await queryMonthList(moment(type));
    res.json(result);
    return;
  }

  res.status(404);
  res.end();
}
