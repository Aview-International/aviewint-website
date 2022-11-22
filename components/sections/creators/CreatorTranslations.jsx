import Image from 'next/image';
import subtitlesAndDubs from '../../../public/img/graphics/creators/subtitles-and-dubs.png';
import shorts from '../../../public/img/graphics/creators/shorts.png';
import distribution from '../../../public/img/graphics/creators/distribution.png';

const ITEMS = [
  {
    title: 'Subtitles and Dubs',
    description:
      'Our team of certified translators work in over 15 languages,including; Spanish, French, Portuguese and Arabic.',
    graphic: subtitlesAndDubs,
  },
  {
    title: 'Shorts',
    description:
      'We create catchy short-form videos from your existing videos, giving your audience bite-sized content that can be enjoyed at any time of day.',
    graphic: shorts,
  },
  {
    title: 'Distribution',
    description:
      'Our tools allow us to seamlessly distribute your content across all your social media channels, including YouTube and Instagram.',
    graphic: distribution,
  },
];

export default function CreatorTranslations() {
  return (
    <section className="section m-horizontal md:text-center">
      <h2 className="title mb-s2">
        Creator <span className="gradient-text gradient-1">Translations</span>
      </h2>
      <p className="body mb-s10">
        We tailor our approach to fit your audience growth goals.
      </p>
      <div className="mx-auto flex max-w-[1030px] flex-col gap-s5">
        {ITEMS.map((item, i) => (
          <div
            className="grid items-center text-left md:grid-cols-2"
            key={`item-${i}`}
          >
            <div className={`order-2 md:-mt-10 ${i % 2 == 0 && 'md:order-1'}`}>
              <h3 className="mb-s1 text-3xl font-bold text-white md:text-4xl">
                {item.title}
              </h3>
              <p className="body">{item.description}</p>
            </div>
            <div
              className={`order-1 max-w-[400px] justify-self-center ${
                i % 2 == 0
                  ? 'md:order-2 md:justify-self-end'
                  : 'md:justify-self-start'
              }`}
            >
              <Image src={item.graphic} alt="subtitles and dubs" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
