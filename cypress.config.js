const { defineConfig } = require('cypress');
// const cypressFirebasePlugin = require('cypress-firebase').plugin;
// const  admin  = require('firebase-admin');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--auto-open-devtools-for-tabs');
        }

        if (browser.family === 'firefox') {
          launchOptions.args.push('-devtools');
        }
        return launchOptions;
      });
      // return cypressFirebasePlugin(on, config, admin, {
      //   projectId: 'admin-console-8e5c2',
      //   databaseURL: 'https://admin-console-8e5c2-default-rtdb.firebaseio.com/'
      // })
    },
    baseUrl: 'http://localhost:3000',

    env: {
      googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
      googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      googleRefreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
      // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
  },
});
