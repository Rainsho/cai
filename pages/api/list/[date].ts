import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import { queryMonthList } from '../../../lib/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = req.query.date?.toString();

  if (/^\d{4}\-\d{2}$/.test(date)) {
    const result = await queryMonthList(moment(date));
    res.json(result);
    return;
  }

  res.status(204);
  res.end();
}
