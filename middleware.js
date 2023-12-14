import { NextResponse } from 'next/server';
// import { auth } from './pages/api/firebase';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { checkTokenExpiry } from './utils/jwtGuard';

// /**
//  * @param token: token generated or created fraudulently
//  * @returns false if token is expired, true otherwise
//  * @author Victor Ogunjobi
//  */
// const checkTokenExpiry = (token) => {
//   if (!token) return false;
//   else {
//     const data = decodeJwt(token);
//     if (!data) return false;
//     const newDate = new Date(data.exp) * 1000;
//     if (newDate < new Date().getTime()) return false;
//     else {
//       const newTime = newDate - new Date().getTime();
//       return {
//         newTime,
//         data,
//       };
//     }
//   }
// };

export function middleware(request) {
  // const { authorization } = request.headers;
  // console.log(authorization);
  // const token = request.cookies.get('token');
  // console.log(checkTokenExpiry());
  // if (!checkTokenExpiry()) {
  //     // try {
  //     // getAuth().onIdTokenChanged(async (user) => {
  //     //   getAuth().verifyIdToken();
  //     //   const newToken = await user.getIdToken(true);
  //     // response.cookies.set('token', newToken);
  //     // });
  //     // } catch {
  const currentUrl = request.url;
  const response = NextResponse.redirect(
    new URL('/login?rdr=true', currentUrl)
  );
  response.cookies.set('redirectUrl', currentUrl);
  // request.cookies.delete('token');
  return response;
  //     // }
  // }
}

export const config = {
  matcher: ['/dashboard/:path*', '/onboarding'],
};
