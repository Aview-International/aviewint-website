import { NextResponse } from 'next/server';
import { checkTokenExpiry } from './utils/jwtExpiry';

/**
 * @returns redirect to /login if token is valid or expired
 * @author Victor Ogunjobi
 */
export async function middleware(request) {
  let response;
  const sessionCookie = request.cookies.get('session');
  const currentUrl = request.url;
  const urlSplit = currentUrl.split('/'); // extract subscription url
  if (urlSplit[3] === 'subscription') {
    //do not redirect to subscription after login
    response = NextResponse.redirect(new URL('/login', currentUrl));
  } else {
    // redirect to other pages after login
    response = NextResponse.redirect(new URL('/login?rdr=true', currentUrl));
    response.cookies.set('redirectUrl', currentUrl);
  }

  try {
    if (!checkTokenExpiry(sessionCookie)) return response;
  } catch (error) {
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding', '/subscription'],
};
