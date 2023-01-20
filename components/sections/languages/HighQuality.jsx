import Image from 'next/image';
import highQuality from '../../../public/img/graphics/languages/high-quality.png';

export default function HighQuality({
  language,
  title,
  graphic = highQuality,
}) {
  return (
    <section className="section m-horizontal grid items-center lg:grid-cols-2">
      <div className="flex md:justify-center">
        <Image
          src={graphic}
          alt="high-quality translations"
          className="max-w-[360px]"
        />
      </div>
      <div>
        <h2
          className="title mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="body">
          Receive high-quality {language} translations from certified
          professionals. At AVIEW, we work closely with each of our clients to
          provide them with the services they need. We translate all kinds of
          material. From advertisements to YouTube videos to scientific
          material, we&apos;ve got you covered.
        </p>
      </div>
    </section>
  );
}
