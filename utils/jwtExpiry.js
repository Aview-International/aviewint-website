import { decodeJwt } from 'jose';

export const checkTokenExpiry = (token) => {
  if (!token) return false;
  else {
    const data = decodeJwt(token);
    if (!data) return false;
    // if (newDate < new Date().getTime()) return false;
    else {
      const newDate = new Date(data.exp) * 1000;
      const newTime = newDate - new Date().getTime();
      return {
        newTime,
        data,
      };
    }
  }
};
