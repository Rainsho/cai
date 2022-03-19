import { NextRequest } from 'next/server';
import { logger } from '../lib/utils';

export async function middleware(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for');
  logger(`${ip}::${req.method}::${req.nextUrl.pathname}`);
}
