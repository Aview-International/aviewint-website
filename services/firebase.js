import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from 'firebase/auth';
import {
  getDatabase,
  set,
  ref,
  child,
  update,
  get,
  onValue,
} from 'firebase/database';
import { transcribeSocialLink } from './apis';
import Cookies from 'js-cookie';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

// Initialize the application
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

// Initialize the auth service
export const auth = getAuth();

export const logoutUser = async () => {
  await signOut(auth).then(() => {
    Cookies.remove('uid');
    Cookies.remove('session');
  });
  window.location.href = '/';
};

export const checkUserEmail = async (uid) => {
  const res = await get(ref(database, `users/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) return snapshot.val();
    else return null;
  });
  return res;
};

// get user from google account
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const response = await signInWithPopup(auth, provider);
  return response;
};

// create new user account in the database after signup
export const createNewUser = async (
  _id,
  firstName = '',
  lastName = '',
  picture = '',
  email
) => {
  await set(ref(database, `users/${_id}`), {
    _id,
    email,
    firstName,
    lastName,
    picture,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
};

// update user preferences
export const updateRequiredServices = async (payload, uid) => {
  get(child(ref(database), `users/${uid}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        ...payload,
      };
      const updates = {
        [`users/${uid}`]: postData,
      };
      await update(ref(database), updates);
      return;
    } else throw new Error('User does not exist');
  });
  return;
};

// get all user data from the database
export const getUserProfile = async (uid, callback) => {
  const messages = ref(database, `users/${uid}`);
  onValue(messages, (snapshot) => {
    callback(snapshot.val());
  });
};

export const subscribeToHistory = (uid, subscriptionCallback) => {
  const pathRef = ref(database, `user-jobs/pending/${uid}`);
  const unsubscribe = onValue(pathRef, (snapshot) => {
    const data = snapshot.val();
    subscriptionCallback(data);
  });
  return unsubscribe; // Return the unsubscribe function
};

export const subscribeToProfile = (callback) => {
  const uid = Cookies.get('uid');
  const pathRef = ref(database, `users/${uid}`);
  const unsubscribe = onValue(pathRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
  return unsubscribe; // Return the unsubscribe function
};

export const getAllCompletedJobs = async (uid) => {
  const res = await get(ref(database, `user-jobs/completed/${uid}`)).then(
    (snapshot) => {
      if (snapshot.exists()) return snapshot.val();
      else return null;
    }
  );
  return res;
};
