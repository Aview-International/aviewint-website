import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

const autoLogout = () => {
  const token = localStorage.getItem('token');
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
  if (!validToken) router.push('/login');
  return <>{children}</>;
};
