import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../pages/api/firebase';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login'); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  return;
};

export default useAuth;
