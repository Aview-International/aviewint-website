import accessNewMarkets from '../../../../public/img/graphics/corporate/business/access-new-markets.png';
import moreDistribution from '../../../../public/img/graphics/corporate/business/more-distribution-channels.png';
import userExperience from '../../../../public/img/graphics/corporate/business/user-experiences.png';
import saveTime from '../../../../public/img/graphics/corporate/business/save-time.png';
import StaggeredTextAndGraphic from '../../../layout/StaggeredTextAndImage';

const ITEMS = [
  {
    title: 'Access New Markets',
    description:
      'Over 7,100 languages are used around the world. By breaking down language barriers, businesses can easily tap into new markets. The growth potential is incredible. Translating your business can attract millions of new prospects.',
    image: accessNewMarkets,
  },
  {
    title: 'More Distribution Channels',
    description:
      'You may be familiar with social media platforms such as Twitter, Instagram, and Facebook. But did you know many international platforms can be accessed through translation? WeChat, KakaoZone, and Mixi are a few examples of large social media sites. Businesses can translate their marketing materials to promote their brand through these platforms.',
    image: moreDistribution,
  },
  {
    title: 'Provide An Amazing User Experience',
    description:
      'People enjoy surfing the web in their native language. Translating your business website will give your audience a good user experience resulting in more conversions.',
    image: userExperience,
  },
  {
    title: 'Save Time',
    description:
      'Translating content allows your business to re-purpose ads, blogs, posts, and more. Rather than spending time creating tons of new content, simply translate it and share it with international audiences.',
    image: saveTime,
  },
];

export default function BenefitsOfBusinessTranslation() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        <span className="gradient-text gradient-2">Benefits</span> of Business
        Translation
      </h2>
      <StaggeredTextAndGraphic items={ITEMS} />
    </section>
  );
}
