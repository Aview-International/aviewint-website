// Social Icons
import linkedin from '../public/img/icons/linkedin.svg';
import facebook from '../public/img/icons/facebook.svg';
import youtube from '../public/img/icons/youtube.svg';
import tiktok from '../public/img/icons/tiktok.svg';
import instagram from '../public/img/icons/instagram.svg';

// Content Creators
import logan1 from '../public/img/creators/logan-1.png';
import ninja1 from '../public/img/creators/ninja-1.png';
import saudBrothers from '../public/img/creators/saud-brothers.png';
import whatIf from '../public/img/creators/what-if.png';
import yesTheory from '../public/img/creators/yes-theory.png';
import markRober from '../public/img/creators/mark-rober.png';
import nextCanada from '../public/img/creators/next-canada.png';
import rippleVentures from '../public/img/creators/ripple-ventures.png';
import wayfoundHealth from '../public/img/creators/wayfound-health.png';
import valnetMedia from '../public/img/creators/valnet-media.png';
import underknownMedia from '../public/img/creators/underknown-media.png';
import activeSelfProtection from '../public/img/creators/underknown-media.png';

// Why We Lead in Translations
import fastAndEasy from '../public/img/graphics/fast-and-easy.png';
import flexible from '../public/img/graphics/flexible.png';
import accurate from '../public/img/graphics/accurate.png';

// Our Services
import subtitles from '../public/img/graphics/subtitles.png';
import dubbing from '../public/img/graphics/dubbing.png';
import shorts from '../public/img/graphics/shorts.png';
import distribution from '../public/img/graphics/distribution.png';

// Generating Aview For
import logan2 from '../public/img/creators/logan-2.png';
import ninja2 from '../public/img/creators/ninja-2.png';
import goodSimpleLiving from '../public/img/creators/good-simple-living.png';
import amandaCerney from '../public/img/creators/amanda-cerney.png';

// Benefits of Translations
import visibility from '../public/img/graphics/visibility.png';
import growth from '../public/img/graphics/growth.png';
import userFriendly from '../public/img/graphics/user-friendly.png';
import expand from '../public/img/graphics/expand.png';
import saveTime from '../public/img/graphics/save-time.png';
import increaseRevenue from '../public/img/graphics/increase-revenue.png';

// Our Core Values
import fastTurnaround from '../public/img/graphics/fast-turnaround.png';
import tailoredForCreators from '../public/img/graphics/tailored-for-creators.png';

// Our Team
import akshay from '../public/img/team/akshay.png';
import andrew from '../public/img/team/andrew.png';
import david from '../public/img/team/david.png';
import garnet from '../public/img/team/garnet.png';
import jon from '../public/img/team/jon.png';
import taehun from '../public/img/team/taehun.png';
import victor from '../public/img/team/victor.png';
import luis from '../public/img/team/luis.png';
import defaultPicture from '../public/img/team/default.png';

// content creators summary
import LoganPaulSummary from '../public/img/summary/logan-paul.png';
import YesTheorySummary from '../public/img/summary/yes-theory.png';
import ActiveSelfProtectionSummary from '../public/img/summary/active-self-protection.png';

// Aview's Growth
import keyMetrics from '../public/img/graphics/key-metrics.png';

// input validators
import { emailValidator, urlValidator } from '../utils/regex';

export const ROUTES = [
  { id: 'route-1', text: 'Home', route: '/' },
  { id: 'route-2', text: 'Creators', route: '/creators' },
  { id: 'route-3', text: 'Corporate', route: '/corporate' },
  { id: 'route-4', text: 'About', route: '/about' },
  { id: 'route-5', text: 'Careers', route: '/careers' },
  { id: 'route-6', text: 'Blog', route: '/blog' },
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
    icon: linkedin,
    altText: 'LinkedIn icon',
  },
  {
    id: 'social-2',
    link: 'https://www.facebook.com/aviewinternational',
    icon: facebook,
    altText: 'Facebook icon',
  },
  {
    id: 'social-3',
    link: 'https://youtube.com/channel/UCjBLxbcY1w0qn8UGiMR2n6w',
    icon: youtube,
    altText: 'YouTube icon',
  },
  {
    id: 'social-4',
    link: 'https://vm.tiktok.com/ZMNQRxbLd/',
    icon: tiktok,
    altText: 'TikTok icon',
  },
  {
    id: 'social-5',
    link: 'https://www.instagram.com/aviewint/',
    icon: instagram,
    altText: 'Instagram icon',
  },
];

export const WORKED_WITH = [
  {
    id: 'creator-1',
    name: 'Logan Paul',
    link: 'https://www.youtube.com/c/loganpaulvlogs',
    icon: logan1,
  },
  {
    id: 'creator-2',
    name: 'Ninja',
    link: 'https://www.youtube.com/c/Ninja',
    icon: ninja1,
  },
  {
    id: 'creator-3',
    name: 'Saud Brothers',
    link: 'https://www.youtube.com/c/SaudBrothers',
    icon: saudBrothers,
  },
  {
    id: 'creator-4',
    name: 'What If',
    link: 'https://www.youtube.com/c/WhatIfScienceShow',
    icon: whatIf,
  },
  {
    id: 'creator-5',
    name: 'Yes Theory',
    link: 'https://www.youtube.com/c/YesTheory',
    icon: yesTheory,
  },
  {
    id: 'creator-6',
    name: 'Mark Rober',
    link: 'https://www.youtube.com/c/MarkRober',
    icon: markRober,
  },
];

export const TRANSLATED_CONTENT = [
  { id: 'video-1', link: 'https://www.youtube.com/embed/ThMCYT6sbHw' },
  { id: 'video-2', link: 'https://www.youtube.com/embed/tk_ZlWJ3qJI' },
  { id: 'video-3', link: 'https://www.youtube.com/embed/8cvhwquPqJ0' },
  { id: 'video-4', link: 'https://www.youtube.com/embed/2ov35705pFQ' },
];

export const LEAD_IN_TRANSLATIONS = [
  {
    id: 'card-1',
    title: 'Fast & Easy',
    description:
      'AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content.',
    graphic: fastAndEasy,
  },
  {
    id: 'card-2',
    title: 'Flexible',
    description:
      'We offer a personalized payment plan and tailor our process to your needs.',
    graphic: flexible,
  },
  {
    id: 'card-3',
    title: 'Accurate',
    description:
      'We will ensure that our translations are accurate no matter the content.',
    graphic: accurate,
  },
];

export const GENERATING_AVIEW_FOR = [
  {
    id: 'creator-1',
    name: 'Logan Paul',
    subscribers: '23.5M+ Subs',
    icon: logan2,
  },
  { id: 'creator-2', name: 'Ninja', subscribers: '23.9M+ Subs', icon: ninja2 },
  {
    id: 'creator-3',
    name: 'Saud Brothers',
    subscribers: '6.7M+ Subs',
    icon: saudBrothers,
  },
  { id: 'creator-4', name: 'What If', subscribers: '6.7M+ Subs', icon: whatIf },
  {
    id: 'creator-5',
    name: 'Yes Theory',
    subscribers: '7.7M+ Subs',
    icon: yesTheory,
  },
  {
    id: 'creator-6',
    name: 'Mark Rober',
    subscribers: '22.3M+ Subs',
    icon: markRober,
  },
  {
    id: 'creator-7',
    name: 'Good Simple Living',
    subscribers: '404K+ Subs',
    icon: goodSimpleLiving,
  },
  {
    id: 'creator-8',
    name: 'Amanda Cerney',
    subscribers: '2.7M+ Subs',
    icon: amandaCerney,
  },
];

export const GROW_CUSTOMERS_INTERNATIONALLY = [
  { id: 'customer-1', name: 'Maverick Media', icon: logan1 },
  { id: 'customer-2', name: 'Mark Rober', icon: markRober },
  { id: 'customer-3', name: 'Saud Brothers', icon: saudBrothers },
  { id: 'customer-4', name: 'What If', icon: whatIf },
  { id: 'customer-5', name: 'Yes Theory', icon: yesTheory },
  { id: 'customer-6', name: 'NEXT Canada', icon: nextCanada },
  // { id: 'customer-7', name: 'Ripple Ventures', icon: rippleVentures },
  { id: 'customer-8', name: 'Wayfound Health', icon: wayfoundHealth },
  { id: 'customer-9', name: 'Valnet Media', icon: valnetMedia },
  { id: 'customer-10', name: 'Underknown Media', icon: underknownMedia },
];

export const OUR_SERVICES = [
  {
    id: 'service-1',
    title: 'Subtitles',
    description:
      'Our team of certified translators work in over 15 languages, including; Spanish, French, Portuguese and Arabic.',
    graphic: subtitles,
  },
  {
    id: 'service-2',
    title: 'Shorts',
    description:
      'We create catchy short-form videos from your existing videos, giving your audience bite-sized content that can be enjoyed at any time of day.',
    graphic: shorts,
  },
  {
    id: 'service-3',
    title: 'Distribution',
    description:
      'Our tools allow us to seamlessly distribute your content across all your social media channels, including YouTube and Instagram.',
    graphic: distribution,
  },
];

export const OUR_MILESTONES = [
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
  {
    id: 'milestone-4',
    end: 1600,
    suffix: '+',
    text: 'Completed Videos',
  },
  {
    id: 'milestone-5',
    end: 400,
    suffix: '+',
    text: 'Hours of Translated Content',
  },
  {
    id: 'milestone-6',
    end: 100,
    suffix: 'M+',
    text: 'Client Subscriber Count',
  },
];

export const BENEFITS_OF_TRANSLATIONS = [
  {
    id: 'benefit-1',
    title: 'Save Time',
    description: 'Leverage existing content to reach new audiences',
    graphic: saveTime,
  },
  {
    id: 'benefit-2',
    title: 'Grow Globally',
    description:
      'Connect with new audiences by becoming internationally searchable',
    graphic: growth,
  },
  {
    id: 'benefit-3',
    title: 'Increased Revenue',
    description:
      'Build engagement with new followers by speaking their language',
    graphic: increaseRevenue,
  },
  {
    id: 'benefit-4',
    title: 'Visibility',
    description:
      'Translated metadata will help increase your visibility on Youtube’s algorithm.',
    graphic: visibility,
  },
];

export const OUR_CORE_VALUES = [
  {
    id: 'value-1',
    title: 'Fast Turn-Around',
    description:
      'Aview will guarantee a 24-hour turn-around on subtitle work and 48 hours turnaround on dubbed content. We understand the importance of being timely to maximize views.',
    graphic: fastTurnaround,
  },
  {
    id: 'value-2',
    title: 'Tailored for Creators',
    description:
      'Aview understands each creator is different and will work closely with your team to find the best service and languages. No one service fits all. We will ensure you receive what is best for you and your brand.',
    graphic: tailoredForCreators,
  },
  {
    id: 'value-3',
    title: 'Flexible Payments',
    description:
      'Aview creates personalized payment plans for each creator to ensure your needs and ROI is met. We will work closely with you and your brand to find a plan that works for you.',
    graphic: flexible,
  },
];

export const TEAM = [
  {
    id: 'group-1',
    role: 'Co-Founders',
    members: [
      {
        id: 'member-1',
        name: 'Akshay Maharaj',
        description: 'Co-Founder',
        picture: akshay,
        linkedin: 'https://www.linkedin.com/in/akshaymaharaj/',
      },
      {
        id: 'member-2',
        name: 'Garnet Delsey',
        description: 'Co-Founder',
        picture: garnet,
        linkedin: 'https://www.linkedin.com/in/gdelsey/',
      },
    ],
  },
  {
    id: 'group-2',
    role: 'Development Team',
    members: [
      {
        id: 'member-1',
        name: 'Andrew Qiao',
        description: 'Software Engineer',
        picture: andrew,
        linkedin: 'https://www.linkedin.com/in/andrewqiao/',
      },
      {
        id: 'member-2',
        name: 'Victor Ogunjobi',
        description: 'Software Engineer',
        picture: victor,
        linkedin: 'https://www.linkedin.com/in/victor-ogunjobi/',
      },
    ],
  },
  {
    id: 'group-3',
    role: 'Design Team',
    members: [
      {
        id: 'member-1',
        name: 'David Lovenburg',
        description: 'UI/UX Designer',
        picture: david,
        linkedin: 'https://www.linkedin.com/in/david-lovenburg/',
      },
      {
        id: 'member-2',
        name: 'Luis Sarceño',
        description: 'Graphic Designer',
        picture: luis,
        linkedin: 'https://www.linkedin.com/in/lesarceno/',
      },
    ],
  },
];

export const AVIEW_GROWTH = [
  {
    id: 'growth-1',
    title: 'Our First Client - Logan Paul',
    description:
      'Aview was founded in 2017 initially by two high school students. Our services were simple yet effective and allowed creators like Logan Paul to expand into new international audiences and globalize their brand. Aview is a leading translation service for many media influencers and brands.',
    icon: logan2,
  },
  {
    id: 'growth-2',
    title: 'Hitting Our Key Metrics',
    description:
      'Our mission has been simple, to help take influencers and brands to global markets. In 2021, We hit our milestone of receiving over 500 million international views across our international content! We are creeping up very quickly on our next milestone of 1 billion views!',
    icon: keyMetrics,
  },
  {
    id: 'growth-3',
    title: 'Expanding Our Services',
    description:
      'Given the increase in demand from content creators to go global, we expanded our offerings to include video dubbing and translated short-form content. With this fast expansion, Aview is always looking for more translators, dubbers and editors to join our team!',
    icon: expand,
  },
];

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at."',
    clientName: 'Lorem ipsum',
    clientPicture: defaultPicture,
  },
  {
    id: 'testimonial-2',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at."',
    clientName: 'Lorem ipsum',
    clientPicture: defaultPicture,
  },
  {
    id: 'testimonial-3',
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt purus purus neque tellus elementum nibh elementum. Lorem donec suspendisse viverra massa at."',
    clientName: 'Lorem ipsum',
    clientPicture: defaultPicture,
  },
];

export const HOW_WE_CAN_HELP = [
  {
    id: 'help-1',
    title: 'Media Translations',
    text: 'Aview specializes in media translations. We will take care of any marketing material that will need to be translated.',
  },
  {
    id: 'help-2',
    title: 'Document Translations',
    text: 'Aview will translate and format any documents that need to be translated. Receive accurate translations in a timely manner.',
  },
  {
    id: 'help-3',
    title: 'Module Translations',
    text: 'Training your team members to releasing an educational workshop, Aview can provide voiceover translations that fit within the modules.',
  },
];

export const LANDING_PAGE_FAQ = [
  {
    id: 'question1',
    question: 'How does it work?',
    answer: `Three simple steps to increase your international viewership.
    <br />
    1. Select from our translations or voiceover services <br />
    2. Indicate what languages would work best for you <br />
    3. Receive 100% accurate translations or voice-overs within 48
    hours, edited and ready to be posted`,
  },
  {
    id: 'question2',
    question: 'What are your services?',
    answer: `AVIEW offers 3 services.
    <br /> <br /> 1. Subtitles Translations <br />
    Receive a translation file that can be uploaded directly to your
    YouTube video. The file will be sent within 24 hours and will
    auto-match the audio from the video. Simply add the translations and
    target new global fans! <br />
    <br /> 2. Voiceover Translations <br />
    Receive your videos completely translated with voice-overs in the
    language of your choosing. Aview will edit and post the video on a
    new YouTube channel within 48 hours. Complete passive income!
    <br />  <br /> 3. Short-form Content
    <br />
    Receive translated short-form content that can be uploaded to
    YouTube, Instagram, TikTok and Facebook. The file will be sent
    within 48 hours and dubbed or translated with subtitles. Go viral in
    several languages!`,
  },
  {
    id: 'question3',
    question: 'Who have you worked with?',
    answer: `We have been generating AVIEW for Logan Paul, Mark Rober, YesTheory, Ninja, Vitalyzdtv, Active Self Protection, Saud Brothers, Amanda Cerny, Marlin and many more! AVIEW has helped these creators expand into international markets and become known worldwide.`,
  },
  {
    id: 'question4',
    question: 'How much does it cost?',
    answer: `AVIEW creates a pricing plan for each creator. We ensure that you see a return on our services! If you would like a quote, please click <a class="underline" href="/#generate-aview">here!</a>`,
  },
  {
    id: 'question5',
    question: 'How large does my audience need to be?',
    answer: `To see the greatest results, we recommend you have an average of 25,000 views per video.`,
  },
  {
    id: 'question6',
    question: 'Can you translate for other platforms like TikTok?',
    answer: `Yes! We are a multimedia translation service. We can translate and edit the content on any platform for you so they are ready to be uploaded.`,
  },
];

export const CORPORATE_PAGE_FAQ = [
  {
    question: 'How does it work?',
    answer: `Three simple steps to increase your international viewership.
    <br /> 
    1. Select from our translations or voiceover services <br /> 
    2. Indicate what languages would work best for you <br /> 
    3. Receive 100% accurate translations or voice-overs within 48
    hours, edited and ready to be posted`,
    _id: 'question1',
  },
  {
    question: 'Who have you worked with?',
    answer: `We have been working with some of the largest media brands, venture capital funds, mental health associations and many more. We have a wide depth of translators, dubbers and editors who will fit your content. 
    `,
    _id: 'question2',
  },
  {
    question: 'What are your services?',
    answer: `AVIEW offers 3 services.
    <br /> <br /> 1. Receive a translation file that can be uploaded directly to your videos. The file will be sent within 24 hours and will auto-match the audio from the video. Simply add the translations and target a new market.  <br />
    <br /> 2. Voiceover Translations <br />
    Receive your videos completely translated with voice-overs that match your subject's voice in the language of your choosing. Aview will edit and send this back within 48 hours. 
    <br />  <br /> 3. Short-form Content
    <br />
    Receive translated short-form content that can be uploaded to YouTube, Instagram, TikTok and Facebook. The file will be sent within 48 hours and dubbed or translated with subtitles. Market in several languages!
    `,
    _id: 'question3',
  },
];

export const GENERATE_AVIEW_INPUT = [
  {
    validator: (value) => value.length >= 3,
    label: 'Name',
    _id: 'name',
    name: 'name',
    type: 'text',
    placeholder: 'Your name',
  },
  {
    validator: (value) => urlValidator(value),
    label: 'Channel Link',
    _id: 'channel_url',
    name: 'url',
    type: 'text',
    placeholder: 'URL to your social media channel',
  },
  {
    validator: (value) => emailValidator(value),
    label: 'Email Address',
    _id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Your email address',
  },
];

export const GENERATE_AVIEW_CHECKBOX = [
  {
    name: 'Translations/Subtitles',
    label: 'Translations/Subtitles',
    value: 'Translations/Subtitles',
    tooltip:
      'Receive a translation file that can be uploaded directly to your YouTube video.',
  },
  {
    name: 'Dubbing',
    label: 'Dubbing',
    value: 'Dubbing',
    tooltip:
      'Receive your videos completely translated with voice-overs in the language of your choosing.',
  },
  {
    name: 'Shorts',
    label: 'Shorts',
    value: 'Shorts',
    tooltip:
      'Receive translated short form content that can be uploaded to YouTube, Instagram, TikTok and Facebook.',
  },
];

export const GENERATE_AVIEW_COMPANY_INPUT = [
  {
    validator: (value) => value.length >= 3,
    label: 'Name',
    _id: 'name',
    name: 'name',
    type: 'text',
    placeholder: 'Your name',
  },
  {
    validator: (value) => value.length >= 3,
    label: 'Company',
    _id: 'companyName',
    name: 'companyName',
    type: 'text',
    placeholder: 'Company name',
  },
  {
    validator: (value) => value.length >= 3,
    label: 'Company Website',
    _id: 'companyUrl',
    name: 'companyUrl',
    type: 'text',
    placeholder: 'URL to company website',
  },
  {
    validator: (value) => emailValidator(value),
    label: 'Email Address',
    _id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Your email address',
  },
];

export const CREATORS_SLIDERS = [
  {
    label: 'Uploads per month',
    max: 30,
    values: false,
    name: 'uploadsPerMonth',
  },
  {
    label: 'Average View Count per Month',
    values: [
      '1K',
      '2K',
      '3.5K',
      '5K',
      '7.5K',
      '10K',
      '20K',
      '35k',
      '50K',
      '75K',
      '100K',
      '200K',
      '350k',
      '500K',
      '750k',
      '1M',
      '2M',
      '5M',
      '5M+',
    ],
    max: 18,
    name: 'averageViewCount',
  },
  {
    label: 'Languages',
    values: false,
    max: 10,
    name: 'languages',
  },
];

export const LANGUAGES = [
  'English',
  'French',
  'German',
  'Spanish',
  'Swedish',
  'Portuguese',
  'Arabic',
  'Russian',
  'Chinese',
];

export const GROWTH_WITH_AVIEW_CREATORS = [
  {
    name: 'Logan Paul',
    subscribers: '23.5M+',
    picture: logan2,
    summary: LoganPaulSummary,
  },
  {
    name: 'Yes Theory',
    subscribers: '7.5M+',
    picture: yesTheory,
    summary: YesTheorySummary,
  },
  {
    name: 'Active Self Protection',
    subscribers: '2.62M+',
    picture: activeSelfProtection,
    summary: ActiveSelfProtectionSummary,
  },
];

export const TEAM_OPEN_POSITIONS = [
  'Translators',
  'Thumbnail Designer',
  'Transcribers',
  'Dubbers',
  'Editors',
];

export const JOIN_THE_TEAM = [
  {
    validator: (value) => value.length >= 3,
    _id: 'name',
    label: 'Name',
    placeholder: 'Your Name',
    name: 'name',
  },
  {
    validator: (value) => emailValidator(value),
    _id: 'email',
    label: 'Email address',
    placeholder: 'Your email address',
    name: 'email',
  },
  {
    validator: (value) => value.length >= 5,
    _id: 'linkedin',
    label: 'LinkedIn',
    placeholder: 'LinkedIn URL',
    name: 'linkedin',
  },
];

export const CAREER_APPLY_TODAY = [
  {
    validator: (value) => value.length >= 3,
    _id: 'name',
    label: 'Name',
    placeholder: 'Your Name',
    name: 'name',
  },
  {
    validator: (value) => emailValidator(value),
    _id: 'email',
    label: 'Email address',
    placeholder: 'Your email address',
    name: 'email',
  },
];

export const GLOBAL_NEWSLETTER = {
  placeholder: 'Your email address',
  type: 'email',
  name: 'email',
  bgColor: 'bg-white',
  textBlack: true,
};

export const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo (the Democratic Republic of the)',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands [Malvinas]',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom of Great Britain and Northern Ireland',
  'United States Minor Outlying Islands',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

export const OUR_TRANSLATION_SERVICES = [
  {
    id: 'service-1',
    title: 'Marketing Materials',
    text: 'Our team of certified translators work in over 15 languages, taking care of language nuances in your video and written marketing materials.',
  },
  {
    id: 'service-2',
    title: 'Documents',
    text: 'We guarantee fast, professional and accurate translations for all documents, including; legal, technical and newsletters.',
  },
  {
    id: 'service-1',
    title: 'Training Modules',
    text: 'We provide subtitle and voiceover dubs to fit your teams training and educational videos.',
  },
];

export const MOST_POPULAR_LANGUAGES = [
  { id: 'language-1', language: 'English' },
  { id: 'language-2', language: 'Mandarin' },
  { id: 'language-3', language: 'Hindi' },
  { id: 'language-4', language: 'Spanish' },
  { id: 'language-5', language: 'Arabic' },
];

export const ALSO_AVAILABLE = [
  { id: 'language-1', language: 'Portuguese' },
  { id: 'language-2', language: 'Indonesian' },
  { id: 'language-3', language: 'Bengali' },
  { id: 'language-4', language: 'German' },
  { id: 'language-5', language: 'Russian' },
  { id: 'language-6', language: 'Japanese' },
  { id: 'language-7', language: 'French' },
  { id: 'language-8', language: 'Marthi' },
  { id: 'language-9', language: 'Urdu' },
  { id: 'language-10', language: 'Teluga' },
];

export const CAREER_PROCESS = [
  {
    department: 'Translator',
    requirement:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
    steps: [
      {
        step: 'Step 1',
        title: 'Accept Posting',
        description:
          'Translators and transcript writers can be either assigned to a channel or pick up jobs per their availability.',
      },
      {
        step: 'Step 2',
        title: 'Translate Transcript',
        description:
          'Once the video is translated, you will send it to the next employee for review or dubbing based on the services offered.',
      },
      {
        step: 'Step 3',
        title: 'Upload to Portal',
      },
    ],
  },
  {
    department: 'Dubber',
    requirement:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
    steps: [
      {
        step: 'Step 1',
        title: 'Assigned to a Creator',
        description:
          'All dubbers will be assigned directly to a content creator, where you will become the international voice for their channel.',
      },
      {
        step: 'Step 2',
        title: 'Dub Video',
        description:
          'Once you get assigned, you will begin the dubbing process which will be reviewed and approved by the project manager',
      },
      {
        step: 'Step 3',
        title: 'Upload to Portal',
      },
    ],
  },
  {
    department: 'Video Editor',
    requirement:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh et feugiat vivamus diam, feugiat feugiat.',
    steps: [
      {
        step: 'Step 1',
        title: 'Accept Posting',
        description:
          'Editors will either be assigned to creator channels or complete videos per request. Depending on the service, you may creator short form content too.',
      },
      {
        step: 'Step 2',
        title: 'Edit Video',
        description:
          'Editing will be completed and approved by the project manager and the creator. Often, editors will have direct communication with our creators.',
      },
      {
        step: 'Step 3',
        title: 'Upload to Portal',
      },
    ],
  },
];

export const ONBOARDING_STAGE_4 = [
  {
    title: 'Translations',
    content: 'Translations of your content in any language of your choice.',
  },
  {
    title: 'Shorts',
    content: 'Your content edited into 15-30 second clips.',
  },
  {
    title: 'Dubbing',
    content: 'Dubbing and subtitles for your content. ',
  },
  {
    title: 'Distribution',
    content: 'We will manage and distribute your translated content for you.',
  },
];

export const AVERAGE_MONTHLY_VIEWS = [
  '0 - 1,000',
  '1,000 - 5,000',
  '5,000 - 10,000',
  '10,000 - 25,000',
  '25,000 - 100,000',
  '100,000 - 250,000',
  '250,000 - 500,000',
  '500,000 - 1,000,00',
  '1,000,000+',
];

export const AVERAGE_VIDEO_DURATION = [
  '1 - 5 minutes',
  '5 - 15 minutes',
  '15 - 30 minutes',
  '30 - 60 minutes',
  '60+ minutes',
];

export const LOGIN_INPUT = [
  {
    name: 'email',
    _id: 'email',
    placeholder: 'Your email',
    type: 'email',
    label: ' Email',
  },
  {
    name: 'password',
    _id: 'password',
    type: 'text',
    placeholder: 'Your password',
    label: ' Password',
  },
];
