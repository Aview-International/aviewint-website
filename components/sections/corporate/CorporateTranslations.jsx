import Image from 'next/image';
import corporateTranslationsL from '../../../public/img/graphics/corporate/corporate-translations-lg.png';
import corporateTranslationsS from '../../../public/img/graphics/corporate/corporate-translations-sm.png';

const CORPORATE = [
  {
    title: 'Marketing Materials',
    description:
      'Our team of certified translators work in over 15 languages, taking care of language nuances in your video and written marketing materials.',
  },
  {
    title: 'Documents',
    description:
      'We guarantee fast, professional and accurate translations for all documents, including; legal, technical and newsletters.',
  },
  {
    title: 'Training Modules',
    description:
      'We provide subtitle and voiceover dubs to fit your teams training and educational videos. ',
  },
];

export default function CorporateTranslations() {
  return (
    <section className="section m-horizontal">
      <h2 className="title md:text-center">
        Corporate{' '}
        <span className="gradient-text gradient-1 mb-s2">Translations</span>
      </h2>
      <p className="body mb-s5 md:text-center">
        Aview offers three services with a 24 hour turnaround time.
      </p>
      <div className="mb-s5 hidden md:block">
        <Image src={corporateTranslationsL} alt="Corporate Translations" />
      </div>
      <div className="mb-s4 md:hidden">
        <Image src={corporateTranslationsS} alt="Corporate Translations" />
      </div>
      <div className="flex flex-row flex-wrap justify-start gap-y-s5 md:gap-x-[10%] md:gap-y-s12 lg:gap-x-[8%]">
        {CORPORATE.map((point, i) => (
          <div className="w-full md:w-[45%] lg:w-[28%]" key={point.title}>
            <h4 className="mb-s2 text-4xl font-bold text-white">
              {point.title}
            </h4>
            <p className="body">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
