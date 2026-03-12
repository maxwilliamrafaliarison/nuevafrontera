import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(es|en|fr)/:path*',
    '/((?!api|_next|img|logo\\.png|favicon\\.ico|.*\\..*).*)',
  ],
};
