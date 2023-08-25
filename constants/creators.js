import twitter from '../public/img/creators/creator-landing/twitter.svg';
import facebook from '../public/img/creators/creator-landing/facebook.svg';
import tumblr from '../public/img/creators/creator-landing/tumblr.svg';
import twitch from '../public/img/creators/creator-landing/twitch.svg';
import blameItOnJorgeMockup from '../public/img/creators/blame-it-on-jorge/mockup.png';
import blameItOnJorgeIcon1 from '../public/img/creators/blame-it-on-jorge/icon-1.png';
import blameItOnJorgeIcon2 from '../public/img/creators/blame-it-on-jorge/icon-2.png';
import blameItOnJorgeFan1 from '../public/img/creators/blame-it-on-jorge/fan-1.png';
import blameItOnJorgeFan2 from '../public/img/creators/blame-it-on-jorge/fan-2.png';
import blameItOnJorgeFan3 from '../public/img/creators/blame-it-on-jorge/fan-3.png';

export const CREATORS = {
  blameitonjorge: {
    landing: {
      title: 'blameitonjorge',
      description:
        "We are happy to announce that blameitonjorge's content is now available in both English and Spanish.",
      buttons: [
        {
          text: 'Watch Now',
          link: 'https://www.youtube.com/@blameitonjorge',
        },
      ],
      image: blameItOnJorgeMockup,
    },
    description: {
      title: "Watch blameitonjorge's Video in the Language of Your Choice",
      description:
        "Each week, a new video will be uploaded to the blameitonjorge's Spanish channel for subscribers to enjoy. Popular videos like “Top 20 Saddest Moments In Kid Shows” and “Top 40 Lost or Banned Episodes of Kid Shows” are now available in Spanish and will be available on a weekly basis.",
      buttons: [
        {
          text: 'Spanish',
          link: 'https://www.youtube.com/@blameitonjorgeespanol',
        },
        {
          text: 'English',
          link: 'https://www.youtube.com/@blameitonjorge',
        },
      ],
      image: blameItOnJorgeIcon1,
    },
    videos: {
      title: "Watch blameitonjorge's Latest Videos",
      description:
        'All translated content can be found on <a href="" target="_blank" class="link">blameitonjorge Espanol</a>, where we have began to recreate some of his most popular videos. Check out some of his Spanish translated content by Aview International.',
      videos: [
        'https://www.youtube.com/embed/VVDN7KgbATI',
        'https://www.youtube.com/embed/2PgpgqL857w',
        'https://www.youtube.com/embed/EP9QjAs6Oq4',
        'https://www.youtube.com/embed/8bzpmwXkSHg',
        'https://www.youtube.com/embed/LcZBPUTJt3A',
        'https://www.youtube.com/embed/d_phc8PQKSA',
        'https://www.youtube.com/embed/JrcO00Dycn0',
        'https://www.youtube.com/embed/R3fWvI15iKc',
        'https://www.youtube.com/embed/EB8xwomPfEo',
      ],
    },
    about: {
      title: 'About blameitonjorge',
      description:
        "Blameitonjorge is a video editor and content creator that makes videos about a wide range of topics including lost media, video games, TV shows, UFO sightings, and much more! He's loved by his audience for his witty and insightful commentary. Now, he's expanding into his international audience by translating videos into different languages.",
      image: blameItOnJorgeIcon2,
    },
    upToDate: {
      title: "Keep Up To Date With All of blameitonjorge's Content",
      description:
        "Subscribe to both Spanish and English channels in order to have all access to blameitonjorge's content across all languages.",
      buttons: [
        {
          text: 'Spanish Channel',
          link: 'https://www.youtube.com/@blameitonjorgeespanol',
        },
        {
          text: 'English Channel',
          link: 'https://www.youtube.com/@blameitonjorge',
        },
      ],
    },
    // fans: {
    //   title: 'Hear What His Fans Have To Say',
    //   fans: [
    //     {
    //       image: blameItOnJorgeFan1,
    //       name: 'Emily F',
    //       description: 'Longtime viewer and fan',
    //       quote:
    //         '“This is awesome!! As someone learning Spanish but just at the point where I need practice more than anything, this will be extremely useful, especially because it seems like the narration is very clear and not spoken too fast”',
    //     },
    //     {
    //       image: blameItOnJorgeFan2,
    //       name: 'TheGrrf',
    //       description: 'New fan',
    //       quote:
    //         "“This is awesome! Your videos deserve to be enjoyed worldwide in every language, they're so interesting”",
    //     },
    //     {
    //       image: blameItOnJorgeFan3,
    //       name: 'El Kaito',
    //       description: 'Longtime viewer and fan',
    //       quote:
    //         "“This is great! I've been enjoying your videos for a long time and wanted to share them with my wife but unfortunately, she doesn't speak English Now she will finally understand why I stayed so entertained watching YouTube”",
    //     },
    //   ],
    // },
    socials: {
      title: 'Follow blameitonjorge on Social Media',
      buttons: [{ image: twitter, link: 'https://twitter.com/blameitonjorge' }],
    },
  },
};
