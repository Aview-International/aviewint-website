import HoverShowImageOrText from '../../../layout/HoverShowImageOrText';
import newsletters from '../../../../public/img/graphics/corporate/marketing/newsletters.png';
import blogs from '../../../../public/img/graphics/corporate/marketing/blogs.png';
import adCampaigns from '../../../../public/img/graphics/corporate/marketing/ad-compaigns.png';
import brochures from '../../../../public/img/graphics/corporate/marketing/brochures.png';
import socialMediaPosts from '../../../../public/img/graphics/corporate/marketing/social-media-posts.png';
import websiteCopy from '../../../../public/img/graphics/corporate/marketing/website-copy.png';

const ITEMS = [
  {
    title: 'Newsletters',
    description:
      'Sending out regular newsletters is one of the best ways to increase sales. Translations provide the option to send newsletters to audiences from around the globe.',
    image: newsletters,
  },
  {
    title: 'Blogs',
    description:
      "A great way to drive traffic to your website and promote company updates is through a blog. But if you're blogging for a multilingual audience, translations are required.",
    image: blogs,
  },
  {
    title: 'Ad Campaigns',
    description:
      'Pay-per-click advertisements are a key component of an online business. Translating your ads allows you to reach a global audience and increase your sales.',
    image: adCampaigns,
  },
  {
    title: 'Brochures',
    description:
      'Brochures are a cost-effective way to get your message out to the world. Creating brochures in multiple languages makes it possible to market to prospects around the globe.',
    image: brochures,
  },
  {
    title: 'Social Media Posts',
    description:
      'Having active social media accounts helps you solidify your business as legitimate and trustworthy. But what if you want to create posts in other languages? At AVIEW we translate social media posts so you can build your audience.',
    image: socialMediaPosts,
  },
  {
    title: 'Website Copy',
    description:
      'Customers shop in their native language. Localizing your website will ensure that visitors will feel at home. Improving customer experience is a great way to improve your conversion rate.',
    image: websiteCopy,
  },
];

export default function MarketingServices() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 text-center">
        Fast and Accurate Marketing Translation{' '}
        <span className="gradient-text gradient-2">Services</span>
      </h2>
      <p className="body mb-10">
        Marketing to a global audience is a fantastic way to drive revenue. But
        how do you handle language barriers? This is why marketing translations
        are a key part of an international growth strategy. At AVIEW, we provide
        fast, accurate, and high-converting translations for all marketing
        materials.
      </p>
      <HoverShowImageOrText items={ITEMS} />
    </section>
  );
}
