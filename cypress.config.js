const { defineConfig } = require('cypress');

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
    },
    baseUrl: 'http://localhost:3000',

    env: {
      googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
      googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      googleRefreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
    },
  },
});
