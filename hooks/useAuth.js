import { useSelector } from 'react-redux';
import { checkTokenExpiry } from '../utils/jwtExpiry';
import { useMemo } from 'react';

const useAuth = () => {
  const token = useSelector((data) => data.user.token);

  const isLoggedIn = useMemo(() => {
    return checkTokenExpiry(token);
  }, [token]);
  return isLoggedIn;
};

export default useAuth;
