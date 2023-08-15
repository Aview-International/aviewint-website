import axios from 'axios';
import { baseUrl } from './baseUrl';

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

export const oauth2callback = async (code) => {
  await axios.post(baseUrl + 'auth/oauth2callback', { code });
};

export const authorizeUser = async () => {
  const response = await axios.get(baseUrl + 'auth/authorize-user');
  return response.data;
};

export const finalizeYoutubeAuth = async (tempId, userId) => {
  return await axios.get(
    baseUrl + `auth/youtube-save?tempId=${tempId}&userId=${userId}`
  );
};

export const getChannelVideos = async (channelId) => {
  const response = await axios.get(
    baseUrl + `auth/youtube-videos?channelId=${channelId}`
  );
  return response.data;
};

export const getUserMessages = async (id) => {
  const response = await axios.get(baseUrl + 'messages/convo?userId=' + id);
  return response.data;
};

export const uploadVideo = async (data, setProgress) => {
  const response = await axios({
    method: 'POST',
    url: baseUrl + 'user/upload-videos',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    data: data,
    onUploadProgress: (progressEvent) =>
      setProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      ),
  });
  return response;
};

export const getUserYoutubeChannel = async (userId) => {
  const response = await axios.get(
    baseUrl + 'auth/youtube-channel?userId=' + userId
  );
  return response.data;
};

export const getMessageStatus = async (userId) => {
  const response = await axios.get(
    baseUrl + 'messages/status?userId=' + userId
  );
  return response.data;
};