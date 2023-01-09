/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000017',
      purple: '#FC00FF',
      blue: '#00FFFF',
      'gray-1': '#494B5B',
      'gray-2': '#99999C',
      white: {
        DEFAULT: '#FCFCFC',
        transparent: 'rgba(252, 252, 252, 0.15)',
      },
      green: '#00C874',
      red: '#FF3939',
      transparent: 'transparent',
      facebook: '#0054ff',
      youtube: '#FF0000',
    },
    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '18px' }],
      base: ['16px', { lineHeight: '20px' }],
      lg: ['18px', { lineHeight: '24px' }],
      xl: ['21px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '30px' }],
      '3xl': ['26px', { lineHeight: '32px' }],
      '4xl': ['30px', { lineHeight: '36px' }],
      '5xl': ['32px', { lineHeight: '40px' }],
      '6xl': ['36px', { lineHeight: '45px' }],
      '7xl': ['40px', { lineHeight: '50px' }],
      '8xl': ['48px', { lineHeight: '60px' }],
    },
    screens: {
      '2xs': '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        s1: '8px',
        's1.5': '12px',
        s2: '16px',
        's2.5': '20px',
        s3: '24px',
        s4: '32px',
        s5: '40px',
        s6: '48px',
        s7: '56px',
        s8: '64px',
        s9: '72px',
        s10: '80px',
        s11: '88px',
        s12: '96px',
        s13: '104px',
        s14: '112px',
        s15: '120px',
        s16: '128px',
        s17: '136px',
        s18: '144px',
        s19: '152px',
        s20: '160px',
        s21: '168px',
        s22: '176px',
        s23: '184px',
        s24: '192px',
        s25: '200px',
      },
      keyframes: {
        roll: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
        popup: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        dropin: {
          '0%': {
            transform: 'translateY(-25px)',
            height: '35px',
          },
          '100%': {
            transform: 'translateY(0)',
            height: '20px',
          },
        },
      },
      animation: {
        roll: 'roll 1s linear infinite',
        popup: 'popup 0.4s ease-in-out 1',
        dropin: 'dropin 0.5s cubic-bezier(.25,.75,.5,1.25) 1',
      },
    },
  },
  plugins: [],
};
