// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SignJWT } from 'jose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { COOKIE_NAME, JSW_SECRET_KEY, USER_CODE } from '../../lib/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  if (req.method === 'POST') {
    const code = req.body?.code;

    if (code !== USER_CODE) {
      res.setHeader(
        'Set-Cookie',
        serialize(COOKIE_NAME, '', { path: '/', httpOnly: true, maxAge: 0 })
      );
      res.status(401).json({ message: 'Invalid code' });
    } else {
      const token = await new SignJWT({})
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1d')
        .sign(JSW_SECRET_KEY);

      res.setHeader('Set-Cookie', serialize(COOKIE_NAME, token, { path: '/', httpOnly: true }));
      res.redirect('/');
    }
  }
}
