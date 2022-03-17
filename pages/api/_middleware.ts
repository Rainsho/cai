import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_NAME, JSW_SECRET_KEY } from '../../lib/constants';

export async function middleware(req: NextRequest) {
  if (req.method === 'POST' && req.nextUrl.pathname === '/api/auth') return;
  if (req.nextUrl.pathname === '/api/ping') return;

  try {
    const token = req.cookies[COOKIE_NAME];

    if (!token) throw new Error('Not found token');

    await jwtVerify(token, JSW_SECRET_KEY);
  } catch (e) {
    console.log((e as Error).message || e);
    const res = NextResponse.redirect(new URL('/auth', req.url));
    res.clearCookie(COOKIE_NAME);

    return res;
  }
}
