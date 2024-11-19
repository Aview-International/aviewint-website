import axios from 'axios';
import FormData from 'form-data';
import Cookies from 'js-cookie';
import { decodeJwt } from 'jose';
import { auth } from './firebase';

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Create an Axios instance with default config
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const isTokenExpired = (token) => {
  try {
    if (!token) return false;
    else {
      const data = decodeJwt(token);
      if (!data) return false;
      const newDate = new Date(data.exp) * 1000;
      if (newDate < new Date().getTime()) return true;
      else {
        return data;
      }
    }
  } catch (error) {
    return false;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = Cookies.get('session');
    if (isTokenExpired(token) === true || !isTokenExpired(token)) {
      const newToken = await auth.currentUser?.getIdToken(true); // force token refresh
      Cookies.set('session', newToken);
      token = newToken;
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const welcomeNewUser = async (email) =>
  await axios.post(baseUrl + 'email/welcome', {
    recipient: email,
  });

export const singleSignOnRegister = async (email, origin) =>
  await axios.post(baseUrl + 'email/register', { email, origin });

export const testAccountLogin = async () =>
  (await axios.get(baseUrl + 'auth/register/test')).data;

export const updateProfileDetails = async (payload, type) => {
  let formdata = new FormData();
  if (type === 'banner') {
    formdata.append('picture', payload);
    return await axiosInstance.patch(
      `auth/update-profile?type=${type}`,
      formdata
    );
  }
  formdata.append('firstName', payload.firstName);
  formdata.append('creatorId', payload.creatorId);
  formdata.append('lastName', payload.lastName);
  formdata.append('picture', payload.picture);

  return await axiosInstance.patch(
    baseUrl + 'auth/update-profile',
    payload.picture ? formdata : payload
  );
};

export const singleSignOnLogin = async (email, origin) =>
  await axiosInstance.post(baseUrl + 'email/login', { email, origin });

export const transcribeSocialLink = async (body) =>
  await axiosInstance.post('transcription/new-task', body);

export const authorizeUser = async () => {
  const response = await axiosInstance.get(
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

// export const getUserMessages = async () => {
//   const response = await axiosInstance.get('messages/convo');
//   return response.data;
// };

export const getUserYoutubeChannel = async () => {
  const response = await axiosInstance.get('auth/youtube-channel');
  return response.data;
};

export const getMessages = async () =>
  (await axiosInstance.get('messages/status')).data;

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

export const uploadSingleVoiceSamples = async (audios) => {
  let formData = new FormData();

  for (const audio of audios) {
    formData.append('voiceSample', audio);
  }

  await axiosInstance.post('dubbing/single-voice-cloning', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const uploadRecordedVoice = async (audios, voices, update = false) => {
  let formData = new FormData();
  for (const audio of audios) {
    formData.append('files', audio);
  }

  formData.append('voices', JSON.stringify(voices));
  return await axiosInstance.post(
    `dubbing/recorded-voice-cloning?purpose=${update ? 'update' : 'add'}`,
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

export const deleteVoiceClone = async (voiceId) => {
  const res = await axiosInstance.patch(`dubbing/delete-voice-cloning`, {
    voiceId,
  });
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

export const getIgVideos = async () =>
  (await axiosInstance.get('auth/instagram/get_videos')).data;

export const getPlans = async () =>
  (await axios.get(baseUrl + 'subscription/plans')).data;

export const createCheckoutSesion = async (planId) => {
  const res = (
    await axiosInstance.post('subscription/stripe/create-checkout-session', {
      plan: planId,
    })
  ).data;

  return res;
};

export const getVoiceSamples = async (voices) =>
  (
    await axiosInstance.post('dubbing/voice-samples', {
      voices,
    })
  ).data;

export const createThread = async () =>
  (await axiosInstance.post('messages/new-thread')).data;

export const sendMessage = async (content, threadId, firstName) =>
  (
    await axiosInstance.post('messages/new-request', {
      content,
      threadId,
      firstName,
    })
  ).data;

export const getAIChatHistory = async (threadId) =>
  (await axiosInstance.get('messages/get-thread/' + threadId)).data;

export const getThreadHistory = async () =>
  (await axiosInstance.get('messages/all-threads')).data;

export const cancelSubscription = async ({ cancelReason, otherReason }) =>
  await axiosInstance.patch('subscription/cancel', {
    cancelReason,
    otherReason,
  });

export const subscriptionHistory = async () =>
  (await axiosInstance.get('subscription/history')).data;

export const deleteThread = async (threadId) =>
  (await axiosInstance.delete(`messages/delete-thread/${threadId}`)).data;

export const downloadVideoFromS3 = async (timestamp, title, lang) => {
  const res = await axiosInstance.post(`admin/download`, {
    timestamp,
    title,
    language: lang,
  });
  return res.data;
};

export const getJobsHistory = async () =>
  (await axiosInstance.get('transcription/history')).data;

export const igAccountTest = async () => {
  const res = await axios.post(baseUrl + 'auth/ig-test');
  return res;
};

export const getTikTokAuthUrl = async () =>
  (await axiosInstance.get('/auth/tiktok/auth_link')).data;

export const completeTikTokAuth = async ({ code, state }) =>
  await axiosInstance.post('auth/tiktok/get-user-token', { code, state });

export const getTikTokVideos = async () =>
  (await axiosInstance.get('auth/tiktok/get_videos')).data;

export const sendEnquiryMessage = async (message, id) =>
  axiosInstance.post(`messages/support/${id}`, { message });

export const createTranslator = async (
  name,
  email,
  nativeLanguage,
  country,
  paymentMethod,
  paymentDetails
) => {
  return axios.post(baseUrl + 'admin/create-translator', {
    name,
    email,
    nativeLanguage,
    country,
    paymentMethod,
    paymentDetails,
  });
};

export const getSupportedLanguages = async () =>
  (await axios.get(baseUrl + 'admin/supported-languages')).data;

export const getCountriesAndCodes = async () =>
  (await axios.get(baseUrl + 'admin/countries-and-codes')).data;
