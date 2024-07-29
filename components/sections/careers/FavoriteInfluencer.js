import Image from 'next/image';
import landingGraphic from '../../../public/img/graphics/translator-landing.png';
import GlobalButton from '../../UI/GlobalButton';

const FavoriteInfluencer = () => {
  return (
    <section
      className="section m-horizontal mt-s6 lg:mt-s12"
      data-aos="fade-up"
    >
      <div className="grid items-center lg:grid-cols-7">
        <div className="col-span-3">
          <h1 className="title mb-s3">
            <span className="gradient-text gradient-2">
              Translate Your Favorite Influencer Videos!
            </span>
          </h1>
          <p className="body mb-s4 lg:max-w-[400px]">
            Apply now to join our team of translators, dubbers and editors.
          </p>
          <GlobalButton type="primary" purpose="route" route="#apply-today">
            Contact Us
          </GlobalButton>
        </div>
        <div className="mt-s4 min-w-[300px] lg:col-span-4 lg:my-auto lg:min-w-[700px]">
          <Image src={landingGraphic} alt="landing-graphic" />
        </div>
      </div>
    </section>
  );
};

export default FavoriteInfluencer;
