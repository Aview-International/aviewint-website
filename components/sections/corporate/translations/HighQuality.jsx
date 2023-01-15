import Image from 'next/image';
import highQuality from '../../../../public/img/graphics/corporate/translations/high-quality.png';

export default function HighQuality() {
  return (
    <section className="section m-horizontal grid items-center lg:grid-cols-2">
      <div className="flex md:justify-center">
        <Image
          src={highQuality}
          alt="high-quality English translations"
          className="max-w-[360px]"
        />
      </div>
      <div>
        <h2 className="title mb-4">
          High-Quality English{' '}
          <span className="gradient-text gradient-2">Translations</span>
        </h2>
        <p className="body">
          Receive high-quality English translations from certified
          professionals. At AVIEW, we work closely with each of our clients to
          provide them with the services they need. We translate all kinds of
          material. From advertisements to YouTube videos to scientific
          material, we&apos;ve got you covered.
        </p>
      </div>
    </section>
  );
}
