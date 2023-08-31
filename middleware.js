import { NextResponse } from 'next/server';
import { decodeJwt } from 'jose';

const authStatus = (token) => {
  if (!token) return false;
  else {
    const data = decodeJwt(token);
    if (!data) return false;
    const newDate = new Date(data.exp) * 1000;
    if (newDate < new Date().getTime()) return false;
    else {
      const newTime = newDate - new Date().getTime();
      return {
        newTime,
        data,
      };
    }
  }
};

export function middleware(request) {
  const token = request.cookies.get('token');

  if (!authStatus(token)) {
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
  matcher: ['/dashboard/:path*', '/onboarding'],
};
