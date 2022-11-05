import Image from 'next/image';
import landingGraphic from '../../../public/img/graphics/about-landing.png';
import Button from '../../UI/Button';

const OurMission = () => {
  return (
    <section className="section m-horizontal mt-s6 lg:mt-s8">
      <div className="grid items-center lg:grid-cols-11">
        <div className="col-span-7">
          <p className="body mb-s2">Our Mission</p>
          <h1 className="title mb-s4">
            To help build content creator brands globally through translated
            subtitles and voiceovers; a client, a language, and{' '}
            <span className="gradient-text gradient-2">Aview </span> at a time.
          </h1>
          <Button type="primary" purpose="route" route="#join-the-team">
            Contact Us
          </Button>
        </div>
        <div className="col-span-7 mt-s4 lg:col-span-4 lg:my-auto lg:min-w-[600px]">
          <Image src={landingGraphic} alt="landing-graphic" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
