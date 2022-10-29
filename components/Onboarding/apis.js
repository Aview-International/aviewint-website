import { baseUrl } from '../baseUrl';

export const InstagramAuthenticationLink = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URL}&scope=user_profile,user_media&response_type=code`;

const scope = 'https://www.googleapis.com/auth/youtube';
const include_granted_scopes = true;
const state = 'state_parameter_passthrough_value';
const redirect_uri = `${baseUrl}/onboarding?stage=5`;
const client_id =
  '976675432160-g6gf4n7e0g8am198nnsimqt3td1c4rc0.apps.googleusercontent.com';

export const YoutubeAuthenticationLink = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&include_granted_scopes=${include_granted_scopes}&state=${state}&redirect_uri=${redirect_uri}&response_type=token&client_id=${client_id}`t