export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/'
    : 'http://aview.us-east-1.elasticbeanstalk.com/';
