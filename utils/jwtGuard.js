import { onAuthStateChanged } from 'firebase/auth';
import { decodeJwt } from 'jose';
import { auth } from '../pages/api/firebase';

export const checkTokenExpiry = async () => {
  let authState = false;
  console.log(auth.currentUser);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('userData', user);
      authState = true;
    } else authState = false;
  });
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
  return authState;
};
