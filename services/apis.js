import axios from 'axios';
import { baseUrl } from './baseUrl';
import FormData from 'form-data';

// Create an Axios instance with default config
const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const welcomeNewUser = async (email) =>
  await axiosInstance.post(baseUrl + 'email/welcome', {
    recipient: email,
  });

export const singleSignOnRegister = async (email, origin) =>
  await axiosInstance.post(baseUrl + 'email/register', { email, origin });

export const registerUser = async (creatorId, email) =>
  await axiosInstance.post(baseUrl + 'auth/register', { creatorId, email });

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

  return await axiosInstance.post(
    baseUrl + 'auth/update-profile',
    payload.picture ? formdata : payload
  );
};

export const singleSignOnLogin = async (email, origin) =>
  await axiosInstance.post(baseUrl + 'email/login', { email, origin });

export const signInWithGoogleAcc = async (token) =>
  await axiosInstance.post(baseUrl + 'auth/login', { token });

export const logoutUserAcc = async () =>
  await axiosInstance.get(baseUrl + 'auth/logout');

export const transcribeSocialLink = async (body) =>
  await axiosInstance.post('transcription/new-task', body);

export const getInstagramShortAccess = async (ig_access_code) =>
  await axiosInstance.post(
    '/api/onboarding/link-instagram?get=short_lived_access',
    {
      code: ig_access_code,
    }
  );

export const getInstagramLongLivedAccess = async (access_token) =>
  await axiosInstance.post(
    '/api/onboarding/link-instagram?get=long_lived_access',
    {
      code: access_token,
    }
  );

export const getInstagramProfile = async (access_token) =>
  await axiosInstance.post(
    '/api/onboarding/link-instagram?get=user_account_info',
    { code: access_token }
  );

export const oauth2callback = async (code) => {
  await axiosInstance.post(baseUrl + 'auth/oauth2callback', { code });
};

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

export const getUserMessages = async () => {
  const response = await axiosInstance.get('messages/convo');
  return response.data;
};

export const getUserYoutubeChannel = async () => {
  const response = await axiosInstance.get('auth/youtube-channel');
  return response.data;
};

export const getMessageStatus = async () =>
  (await axiosInstance.get('messages/status')).data;

export const joinWaitlist = async (data) => {
  return axiosInstance.post(baseUrl + 'auth/join-waitlist', data);
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

export const getIgVideos = async (code) =>
  await axiosInstance.post('auth/instagram/get_videos', { code });

export const getPlans = async () => {
  const response = (await axiosInstance.get('subscription/plans')).data;
  return response;
};

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

export const getJobsHistory = async () =>
  (await axiosInstance.get('/transcription/history')).data;
