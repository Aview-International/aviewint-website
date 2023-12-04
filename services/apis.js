import axios from 'axios';
import { baseUrl } from './baseUrl';
import FormData from 'form-data';
import Cookies from 'js-cookie';

// Function to get the token asynchronously
const getToken = async () => {
  try {
    const token = await Cookies.get('token');
    return token;
  } catch (error) {
    // Handle token retrieval errors here
    console.error('Error getting token:', error);
    return null;
  }
};

// Create an Axios instance without default headers
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Add an interceptor to set the Authorization header before each request
axiosInstance.interceptors.request.use(
  async (config) => {
    // Get the token before making the request
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // Handle the case where token is not available
      // For example, redirect to login or handle unauthorized access
      // You can customize this based on your application's requirements
      console.error('Token is not available.');
      // You might want to redirect to login or handle unauthorized access here
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

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

  return await axiosInstance.post(
    baseUrl + 'auth/update-profile',
    payload.picture ? formdata : payload
  );
};

export const singleSignOnLogin = async (email, origin) =>
  await axios.post(baseUrl + 'email/login', { email, origin });

export const transcribeSocialLink = async (body) =>
  await axiosInstance.post('transcription/new-task', body);

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
  const response = await axios.get(
    `${baseUrl}auth/authorize-user?rdr=${process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_ENVIRONMENT}`
  );
  return response.data;
};

export const finalizeYoutubeAuth = async (tempId, userId) => {
  return await axiosInstance.get(
    `auth/youtube-save?tempId=${tempId}&userId=${userId}`
  );
};

export const getChannelVideos = async (channelId) => {
  const response = await axiosInstance.get(
    `auth/youtube-videos?channelId=${channelId}`
  );
  return response.data;
};

export const getUserMessages = async (id) => {
  const response = await axios.get(baseUrl + 'messages/convo?userId=' + id);
  return response.data;
};

export const getUserYoutubeChannel = async (userId) => {
  const response = await axiosInstance.get(
    'auth/youtube-channel?userId=' + userId
  );
  return response.data;
};

export const getMessageStatus = async (userId) => {
  const response = await axiosInstance.get('messages/status?userId=' + userId);
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

  await axiosInstance.post(
    'dubbing/multiple-voice-cloning?userId=' + userId,
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

  await axiosInstance.post(
    'dubbing/single-voice-cloning?userId=' + userId,
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

  return await axiosInstance.post(
    'dubbing/recorded-voice-cloning?userId=' + userId,
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
  const response = await axiosInstance.post(
    'dubbing/test-voice-cloning',
    body,
    { responseType: 'blob' }
  );

  return response;
};

export const deleteVoiceClone = async (userId, voiceId) => {
  const res = await axiosInstance.patch(
    `dubbing/delete-voice-cloning/${userId}`,
    { voiceId }
  );
  return res;
};

export const uploadCreatorVideo = async (
  video,
  creatorId,
  languages,
  additionalNote,
  setUploadProgress
) => {
  let formData = new FormData();
  formData.append('video', video);
  formData.append('creatorId', creatorId);
  formData.append('additionalNote', additionalNote);
  for (const lang of languages) formData.append('languages', lang);

  await axiosInstance.post('transcription/upload-creator-video', formData, {
    onUploadProgress: (progressEvent) =>
      setUploadProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      ),
  });
  return;
};

export const getIgAuthLink = async () => {
  const res = await axiosInstance.get('auth/instagram/get_auth_link');
  return res.data;
};

export const completeIgConnection = async (code, uid) => {
  const res = await axiosInstance.post('auth/instagram/get_ig_code', {
    code,
    uid,
  });
  return res.data;
};

export const getIgVideos = async (code) =>
  await axiosInstance.post('auth/instagram/get_videos', { code });
