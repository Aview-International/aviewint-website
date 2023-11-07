import { NextResponse } from 'next/server';
import { verifyAuthStatus } from './utils/authStatus';

export function middleware(request) {
  const token = request.cookies.get('token');

  if (!verifyAuthStatus(token)) {
    const currentUrl = request.url;
    request.cookies.delete('token');

    const response = NextResponse.redirect(
      new URL('/login?rdr=true', request.url)
    );

    response.cookies.set('redirectUrl', currentUrl);
    return response;
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/onboarding',
    '/onboard/new-voice/creator-unique',
  ],
};
