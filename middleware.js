import { NextResponse } from 'next/server';
import { checkTokenExpiry } from './utils/jwtExpiry';

/**
 * @returns redirect to /login if token is valid or expired
 * @author Victor Ogunjobi
 */
export async function middleware(request) {
  const sessionCookie = request.cookies.get('session');
  const currentUrl = request.url;
  const response = NextResponse.redirect(
    new URL('/login?rdr=true', currentUrl)
  );

  try {
    if (!checkTokenExpiry(sessionCookie)) {
      response.cookies.set('redirectUrl', currentUrl);
      return response;
    }
  } catch (error) {
    response.cookies.set('redirectUrl', currentUrl);
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding'],
};
