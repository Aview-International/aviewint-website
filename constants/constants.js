import linkedinIcon from '../public/img/icons/linkedin.svg';
import facebookIcon from '../public/img/icons/facebook.svg';
import youtubeIcon from '../public/img/icons/youtube.svg';
import tiktokIcon from '../public/img/icons/tiktok.svg';
import instagramIcon from '../public/img/icons/instagram.svg';

export const ROUTES = [
  { id: 'route-1', text: 'Home', route: '/' },
  { id: 'route-2', text: 'Creators', route: '/creators' },
  { id: 'route-3', text: 'Corporate', route: '/corporate' },
  { id: 'route-4', text: 'BillC96', route: '/billc96' },
  { id: 'route-5', text: 'About', route: '/about' },
  { id: 'route-6', text: 'Careers', route: '/careers' },
  { id: 'route-7', text: 'Blog', route: '/blog' },
];

export const MILESTONES = [
  {
    id: 'milestone-1',
    end: 500,
    suffix: 'M+',
    text: 'International Creator Views',
  },
  {
    id: 'milestone-2',
    end: 15,
    suffix: '+',
    text: 'Languages',
  },
  {
    id: 'milestone-3',
    end: 10,
    suffix: 'M+',
    text: 'International Gained Subscribers',
  },
];

export const SOCIALS = [
  {
    id: 'social-1',
    link: 'https://www.linkedin.com/company/aview-international',
    icon: linkedinIcon,
    altText: 'LinkedIn icon',
  },
  {
    id: 'social-2',
    link: 'https://www.facebook.com/aviewinternational',
    icon: facebookIcon,
    altText: 'Facebook icon',
  },
  {
    id: 'social-3',
    link: 'https://youtube.com/channel/UCjBLxbcY1w0qn8UGiMR2n6w',
    icon: youtubeIcon,
    altText: 'YouTube icon',
  },
  {
    id: 'social-4',
    link: 'https://vm.tiktok.com/ZMNQRxbLd/',
    icon: tiktokIcon,
    altText: 'TikTok icon',
  },
  {
    id: 'social-5',
    link: 'https://www.instagram.com/aviewint/',
    icon: instagramIcon,
    altText: 'Instagram icon',
  },
];
