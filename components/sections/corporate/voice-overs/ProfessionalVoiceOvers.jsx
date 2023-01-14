import StaggeredTextAndGraphic from '../../../layout/StaggeredTextAndImage';
import socialMedia from '../../../../public/img/graphics/corporate/voice-over/social-media.png';
import broadcasting from '../../../../public/img/graphics/corporate/voice-over/broadcasting.png';
import marketing from '../../../../public/img/graphics/corporate/voice-over/marketing.png';
import eLearning from '../../../../public/img/graphics/corporate/voice-over/e-learning.png';

const ITEMS = [
  {
    title: 'Social Media',
    description:
      'Creating voiceovers for social media platforms such as YouTube, Instagram, and TikTok can help you grow your audience exponentially. At AVIEW, we help creators set up and promote multilingual accounts to help them reach more people.',
    image: socialMedia,
  },
  {
    title: 'Broadcasting',
    description:
      "Whether it's TV, radio, or advertising, we've got you covered. Users tend to have a longer watch time when they can easily understand the dialogue. By translating your broadcasting media into different languages you can reach more people.",
    image: broadcasting,
  },
  {
    title: 'Marketing',
    description:
      'Voiceovers are great for conversions. This is because people tend to feel more comfortable shopping in their native language. Creating translated marketing material can open up new doors in terms of audience insights, segmentation, and more.',
    image: marketing,
  },
  {
    title: 'eLearning',
    description:
      "Educational videos can be especially hard for people to understand if they're not in their parent language. At AVIEW we record voiceovers for learning management systems, corporate training videos, and online courses.",
    image: eLearning,
  },
];

export default function ProfessionalVoiceOvers() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        Professional{' '}
        <span className="gradient-text gradient-2">Voice Overs</span> with
        Crystal Clear Audio
      </h2>
      <StaggeredTextAndGraphic items={ITEMS} />
    </section>
  );
}
