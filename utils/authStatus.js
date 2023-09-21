import { decodeJwt } from 'jose';

export const verifyAuthStatus = (token) => {
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
