import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
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
import { v4 as uuidv4 } from 'uuid';
import { transcribeSocialLink } from '../../../services/apis';

export const InstagramAuthenticationLink = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`;

const scope = 'https://www.googleapis.com/auth/youtube';
const include_granted_scopes = true;
const state = 'state_parameter_passthrough_value';
const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

export const YoutubeAuthenticationLink = (redirect_uri) =>
  `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&include_granted_scopes=${include_granted_scopes}&state=${state}&redirect_uri=${redirect_uri}&response_type=token&client_id=${client_id}`;

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
const app = initializeApp(firebaseConfig);

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

export const getAllPayments = async (_id) => {
  const res = await get(ref(database, `payments/${_id}`)).then((snapshot) => {
    if (snapshot.exists()) return snapshot.val();
    else return null;
  });
  return res;
};

export const createANewJob = async (uid, jobDetails) => {
  let jobId = uuidv4();
  await transcribeSocialLink(
    jobDetails
    // creatorid: uid,
    // jobId,
    // videoData: jobDetails.videoData,
  );

  // await set(ref(database, `user-jobs/pending/${uid}/${jobId}`), jobDetails);
  // await set(
  //   ref(database, `admin-jobs/pending/transcription/${jobId}`),
  //   jobDetails
  // );
  // get(child(ref(database), `users/${uid}`)).then(async (snapshot) => {
  //   if (snapshot.exists()) {
  //     const data = snapshot.val();
  //     const newPostData = {
  //       ...data,
  //       pendingVideos: 1,
  //     };
  //     const existingPostData = {
  //       ...data,
  //       pendingVideos: +data.pendingVideos + 1,
  //     };
  //     const updates = {
  //       [`users/${uid}`]: data.pendingVideos ? existingPostData : newPostData,
  //     };
  //     await update(ref(database), updates);
  //   }
  // });
};

export const getAllPendingJobs = async (uid) => {
  const res = await get(ref(database, `user-jobs/pending/${uid}`)).then(
    (snapshot) => {
      if (snapshot.exists()) return snapshot.val();
      else return null;
    }
  );
  return res;
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
