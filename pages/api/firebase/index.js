import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  FacebookAuthProvider,
} from 'firebase/auth';
import {
  getDatabase,
  set,
  ref,
  child,
  update,
  get,
  push,
  onValue,
} from 'firebase/database';
import { baseUrl } from '../../../components/baseUrl';

export const InstagramAuthenticationLink = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`;

const scope = 'https://www.googleapis.com/auth/youtube';
const include_granted_scopes = true;
const state = 'state_parameter_passthrough_value';
const redirect_uri = `${baseUrl}/onboarding?stage=4`;
const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

export const YoutubeAuthenticationLink = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&include_granted_scopes=${include_granted_scopes}&state=${state}&redirect_uri=${redirect_uri}&response_type=token&client_id=${client_id}`;

const prodFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_PRODUCTION_FIREBASE_DATABASE_URL,
};

const testFirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_FIREBASE_DATABASE_URL,
};

// Initialize the application
const app = initializeApp(
  process.env.NODE_ENV === 'development'
    ? testFirebaseConfig
    : prodFirebaseConfig
);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize the auth service
const auth = getAuth();

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

// get user credentials from facebook account
export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const response = await signInWithPopup(auth, provider);
  console.log(response);
  return response;
};

// create new user account in the database after signup
export const createNewUser = async (
  _id,
  firstName,
  lastName,
  picture,
  email
) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        _id,
        email,
        firstName,
        lastName,
        picture,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      await set(ref(database, `users/${_id}`), {
        _id,
        email,
        firstName,
        lastName,
        picture,
      });
    }
  });
};

// update user preferences
export const updateAviewUsage = async (role, _id) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        role,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      console.log('No data available');
    }
  });
};

export const updateRequiredServices = async (services, _id) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        services,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      console.log('No data available');
    }
  });
};

// save user youtube channel id after connecting youtube account
export const addYoutubeChannelId = async (
  youtubeChannelName,
  youtubeChannelId,
  _id
) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        youtubeChannelName,
        youtubeChannelId,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      console.log('No data available');
    }
  });
};

export const updateUserBio = async (payload, _id) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        monthlyView: payload.monthlyView,
        languagesRequired: payload.languages,
        averageDuration: payload.averageVideoDuration,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      console.log('No data available');
    }
  });
};

export const updateUserInstagram = async (
  _id,
  ig_username,
  ig_account_id,
  ig_account_type,
  ig_access_token,
  ig_access_token_expiry
) => {
  get(child(ref(database), `users/${_id}`)).then(async (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const postData = {
        ...data,
        ig_username,
        ig_account_id,
        ig_account_type,
        ig_access_token,
        ig_access_token_expiry,
      };
      const updates = {
        [`users/${_id}`]: postData,
      };
      await update(ref(database), updates);
    } else {
      console.log('No data available');
    }
  });
};

// get all user data from the database
export const getUserProfile = async (_id) => {
  const res = await get(ref(database, `users/${_id}`)).then((snapshot) => {
    if (snapshot.exists()) return snapshot.val();
    else return null;
  });
  return res;
};

// save video to the database
export const saveVideo = async (channelId, data) => {
  await set(ref(database, `youtube-videos/${channelId}`), data);
};

// save user message to db
export const sendMessage = async (uid, message) => {
  const data = {
    message: message,
    timeStamp: Date.now(),
  };

  // get message key
  const dataKey = push(child(ref(database), 'chats')).key;
  const updates = {};
  updates['/chats/' + uid + '/' + dataKey] = data;

  return update(ref(database), updates);
};

// fetch user messages
export const fetchMessages = async (uid, callback) => {
  const messages = ref(database, 'chats/' + uid);
  onValue(messages, (snapshot) => {
    let chats = [];
    snapshot.forEach((el) => {
      chats.push(el.val());
    });
    callback(chats);
  });
};
