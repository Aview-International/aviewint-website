import axios from 'axios';
import { baseUrl } from '../components/baseUrl';

export const welcomeNewUser = async (email) => {
  return await axios.post(baseUrl + 'email/welcome', {
    recipient: email,
  });
};

export const singleSignOnRegister = async (email) => {
  return await axios.post(baseUrl + 'email/register', { email });
};

export const singleSignOn = async (email) => {
  return await axios.post(baseUrl + 'email/login', { email });
};

export const transcribeSocialLink = async (body) => {
  return await axios.post(baseUrl + 'transcription/social', body);
};
