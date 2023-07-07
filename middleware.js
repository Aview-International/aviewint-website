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
  const status = authStatus(token);
  if (!status) {
    request.cookies.delete('token');
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding'],
};
