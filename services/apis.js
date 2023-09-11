import axios from 'axios';
import { baseUrl } from './baseUrl';
import FormData from 'form-data';

export const getHomePage = async () => await axios.get(baseUrl + 'health');

export const welcomeNewUser = async (email) =>
  await axios.post(baseUrl + 'email/welcome', {
    recipient: email,
  });

export const singleSignOnRegister = async (email, origin) =>
  await axios.post(baseUrl + 'email/register', { email, origin });

export const registerUser = async (creatorId, email) =>
  await axios.post(baseUrl + 'auth/register', { creatorId, email });

export const updateProfileDetails = async (payload) => {
  let formdata = new FormData();
  formdata.append('firstName', payload.firstName);
  formdata.append('creatorId', payload.creatorId);
  formdata.append('lastName', payload.lastName);
  formdata.append('picture', payload.picture);

  return await axios.post(
    baseUrl + 'auth/update-profile',
    payload.picture ? formdata : payload
  );
};

export const singleSignOnLogin = async (email, origin) =>
  await axios.post(baseUrl + 'email/login', { email, origin });

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

export const joinWaitlist = async (data) => {
  return axios.post(baseUrl + 'auth/join-waitlist', data);
};

export const uploadMultipleVoiceSamples = async (speakers, userId) => {
  let formData = new FormData();

  for (const speaker of speakers) {
    for (const audio of speaker.audios) {
      formData.append('voiceSample', audio);
      formData.append('speaker', speaker.name);
    }
  }

  await axios.post(
    baseUrl + 'dubbing/multiple-voice-cloning?userId=' + userId,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const uploadSingleVoiceSamples = async (audios, userId) => {
  let formData = new FormData();

  for (const audio of audios) {
    formData.append('voiceSample', audio);
  }

  await axios.post(
    baseUrl + 'dubbing/single-voice-cloning?userId=' + userId,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const uploadRecordedVoice = async (audios, userId) => {
  let formData = new FormData();

  for (const audio of audios) {
    formData.append('voiceSample', audio);
  }

  return await axios.post(
    baseUrl + 'dubbing/recorded-voice-cloning?userId=' + userId,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const testVoiceCloning = async (text, voiceId) => {
  const body = {
    text,
    voiceId,
  };
  const response = await axios.post(
    baseUrl + 'dubbing/test-voice-cloning',
    body,
    { responseType: 'blob' }
  );

  return response;
};

export const deleteVoiceClone = async (userId, voiceId) => {
  const res = await axios.patch(
    `${baseUrl}dubbing/delete-voice-cloning/${userId}`,
    { voiceId }
  );
  return res;
};
