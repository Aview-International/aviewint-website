import { NextResponse } from 'next/server';
import { checkTokenExpiry } from './utils/jwtExpiry';

/**
 * @returns redirect to /login if token is valid or expired
 * @author Victor Ogunjobi
 */
export async function middleware(request) {
  const token = request.cookies.get('token');

  if (!checkTokenExpiry(token)) {
    const currentUrl = request.url;
    const response = NextResponse.redirect(
      new URL('/login?rdr=true', currentUrl)
    );
    response.cookies.set('redirectUrl', currentUrl);
    request.cookies.delete('token');
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding'],
};
