import Cookies from 'js-cookie';
import { checkTokenExpiry } from '../utils/jwtExpiry';
import { useMemo } from 'react';

const useAuth = () => {
  const sessionCookie = Cookies.get('session');

  const isLoggedIn = useMemo(() => {
    return checkTokenExpiry(sessionCookie);
  }, [sessionCookie]);
  return isLoggedIn;
};

export default useAuth;
