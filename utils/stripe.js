import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
);

export const stripeAppearance = {
  theme: 'night',
  variables: {
    colorPrimaryText: '#ffffff',
    borderRadius: '4px',
    colorPrimary: '#ff00ff',
    colorDanger: '#df1b41',
    fontWeightNormal: '600',
    fontSizeBase: '18px',
  },
};
