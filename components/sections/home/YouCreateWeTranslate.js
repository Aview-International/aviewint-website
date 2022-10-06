import Button from '../../UI/Button';
import globeGraphic from '../../../public/img/graphics/globe.png';
import Image from 'next/image';

const YouCreateWeTranslate = () => {
  return (
    <section
      className="section m-horizontal grid items-center gap-s5 md:grid-cols-[4fr,3fr] md:gap-s6 lg:gap-s20"
      data-aos="zoom-in"
    >
      <div>
        <h2 className="title mb-s4 md:mb-s2">
          A Leader In{' '}
          <span className="gradient-text gradient-2">Translations</span>
        </h2>
        <div className="mb-s4 md:hidden">
          <Image src={globeGraphic} alt="Translation graphic" />
        </div>
        <p className="body mb-s4">
          With our customized approach, we help you expand your audience and
          exponentially increase your revenues.
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={globeGraphic} alt="Translation graphic" />
      </div>
    </section>
  );
};

export default YouCreateWeTranslate;
