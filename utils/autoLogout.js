import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const autoLogout = () => {
  if (typeof window !== 'undefined') {
    var token = localStorage.getItem('token');
  }
  if (!token) return false;
  else {
    const data = jwt.decode(token);
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

export const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const validToken = autoLogout();
  useEffect(() => {
    console.log('validToken', validToken);
    if (!validToken) router.push('/login');
  }, []);
  return <>{children}</>;
};
