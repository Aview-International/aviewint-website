import Image from 'next/image';

import globeGraphic from '../../../public/img/graphics/globe.png';

const YouCreateWeTranslate = () => {
  return (
    <section className="section m-horizontal grid items-center gap-s5 md:grid-cols-[4fr,3fr] md:gap-s6 lg:gap-s20">
      <div>
        <h2 className="title mb-s4 md:mb-s2">
          A Leader In{' '}
          <span className="gradient-text gradient-2">Translations</span>
        </h2>
        <div className="mb-s4 md:hidden">
          <Image src={globeGraphic} alt="Translation graphic" />
        </div>
        <p className="body mb-s3">
          Why does AVIEW lead in video translations? Our customized approach
          allows us to help you expand your audience and exponentially increase
          your revenue.
        </p>
        <p className="body">
          Whether you need subtitles, voice-overs, video editing, or
          distribution, AVIEW is your one-stop shop for anyone that wants to
          grow their audience. Creators have used our services to gain millions
          of views from around the world.
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={globeGraphic} alt="Translation graphic" />
      </div>
    </section>
  );
};

export default YouCreateWeTranslate;
