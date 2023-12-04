import { NextResponse } from 'next/server';
// import { getAuth } from 'firebase/auth';
import { decodeJwt } from 'jose';

/**
 * @param token: token generated or created fraudulently
 * @returns false if token is expired, true otherwise
 * @author Victor Ogunjobi
 */
const checkTokenExpiry = (token) => {
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
  //  this is not complete yet!
  if (!checkTokenExpiry(token)) {
    // try {
    // getAuth().onIdTokenChanged(async (user) => {
    //   getAuth().verifyIdToken();
    //   const newToken = await user.getIdToken(true);
    response.cookies.set('token', newToken);
    // });
    // } catch {
    const currentUrl = request.url;

    const response = NextResponse.redirect(
      new URL('/login?rdr=true', currentUrl)
    );
    response.cookies.set('redirectUrl', currentUrl);
    request.cookies.delete('token');
    return response;
    // }
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding'],
};
