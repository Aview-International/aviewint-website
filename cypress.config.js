const { defineConfig } = require('cypress');
const path = require('path');
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          mode: 'development', // Specify webpack mode if needed
          resolve: {
            fallback: {
              path: require.resolve('path-browserify'),
              util: require.resolve('util/'),
            },
            extensions: ['.js', '.jsx'],
          },
          module: {
            rules: [
              {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                  },
                ],
              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                  
                      fallback: 'file-loader',
                      publicPath: '/_next/static/images/', // Public path to access assets
                   
                      name: '[name]-[hash].[ext]', // File name pattern
                    },
                  },
                ],
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      publicPath: '/_next/static/fonts/', // Public path to access fonts
                      fallback: 'url-loader', // Output path in the build directory
                      name: '[name]-[hash].[ext]', // File name pattern
                    },
                  },
                ],
              }
            ],
          },
        },
        watchOptions: {}, // Customize watchOptions if needed
      };
      
      on('file:preprocessor', webpackPreprocessor(options))
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
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
