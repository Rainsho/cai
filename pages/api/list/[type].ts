import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import { accountFeed, feed, queryAccountList, queryMonthList } from '../../../lib/services';

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

  if (type.toUpperCase() === 'ACCOUNTS') {
    const result = await accountFeed();
    res.json(result);
    return;
  }

  if (type.toUpperCase() === 'ACCOUNT') {
    const id = +req.query.id;
    const result = await queryAccountList(id);

    if (!result) {
      res.status(204);
      res.end();
    } else {
      res.json(result);
    }
  }

  res.status(404);
  res.end();
}
