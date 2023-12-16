import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

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

export default async function handler(req, res) {
  const { email, charge, services, _id, wordCount } = req.body;
  let paymentId = uuidv4();

  try {
    const date = new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const time = new Date().toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const res = await set(ref(database, `payments/${_id}/${paymentId}`), {
      date,
      time,
      email,
      wordCount,
      services,
      charge,
      amount: charge,
    });
    res.status(201).json(res);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to complete purchase' });
  }
}
