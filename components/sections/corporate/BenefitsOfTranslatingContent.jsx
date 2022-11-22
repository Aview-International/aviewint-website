import Image from 'next/image';
import saveTime from '../../../public/img/graphics/corporate/save-time.png';
import growGlobally from '../../../public/img/graphics/corporate/grow-globally.png';
import visibility from '../../../public/img/graphics/corporate/visibility.png';
import increaseRevenue from '../../../public/img/graphics/corporate/increase-revenue.png';

const BENEFITS = [
  {
    title: 'Save Time',
    description: 'Leverage existing content to reach new audiences.',
    icon: saveTime,
  },
  {
    title: 'Grow Globally',
    description:
      'Connect with new audiences by becoming internationally searchable.',
    icon: growGlobally,
  },
  {
    title: 'Visibility',
    description:
      "Translated metadata will help increase your visibility on YouTube's algorithm.",
    icon: visibility,
  },
  {
    title: 'Increase Revenue',
    description:
      'Build engagement with new audiences by speaking their language.',
    icon: increaseRevenue,
  },
];

export default function BenefitsOfTranslatingContent() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s8 md:mb-s12 md:text-center">
        Benefits of Translating Your{' '}
        <span className="gradient-text gradient-1">Content</span>
      </h2>
      <div className="mx-auto flex max-w-[760px] flex-row flex-wrap justify-center gap-y-s8 gap-x-[20%]">
        {BENEFITS.map((benefit) => (
          <div
            className="block w-full text-center md:w-[40%]"
            key={benefit.title}
          >
            <div className="mx-auto mb-s2 w-[160px]">
              <Image src={benefit.icon} alt={benefit.title} />
            </div>
            <p className="mb-s2 text-4xl font-bold text-white md:text-6xl">
              {benefit.title}
            </p>
            <p className="body text-white md:text-left">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
