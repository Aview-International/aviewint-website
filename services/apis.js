import axios from 'axios';
import { baseUrl } from '../components/baseUrl';

export const welcomeNewUser = async (email) =>
  await axios.post(baseUrl + 'email/welcome', {
    recipient: email,
  });

export const singleSignOnRegister = async (email) =>
  await axios.post(baseUrl + 'email/register', { email });

export const singleSignOn = async (email) =>
  await axios.post(baseUrl + 'email/login', { email });

export const transcribeSocialLink = async (body) =>
  await axios.post(baseUrl + 'transcription/social', body);

export const getInstagramShortAccess = async (ig_access_code) =>
  await axios.post('/api/onboarding/link-instagram?get=short_lived_access', {
    code: ig_access_code,
  });

export const getInstagramLongLivedAccess = async (access_token) =>
  await axios.post('/api/onboarding/link-instagram?get=long_lived_access', {
    code: access_token,
  });

export const getInstagramProfile = async (access_token) =>
  await axios.post('/api/onboarding/link-instagram?get=user_account_info', {
    code: access_token,
  });
