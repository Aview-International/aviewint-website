import Image from 'next/image';
import GlobalButton from '../../UI/GlobalButton';
import graphic from '../../../public/img/graphics/creators/our-creators.png';

export default function OurCreatorsServices() {
  return (
    <section className="section m-horizontal mt-s3 grid gap-s3 md:mt-s12 md:grid-cols-2 md:items-center md:gap-s6">
      <div className="order-2 md:order-1">
        <h1 className="title mb-s2">
          Our Creator <span className="gradient-1 gradient-text">Services</span>
        </h1>
        <p className="body mb-s4">
          We offer a wide range of translation services tailored to content
          creation and corporate materials. All with the intended goal of
          providing you the highest quality translated content to increase your
          conversions and audience growth.
        </p>
        <GlobalButton type="primary" purpose="route" route="#generate-aview">
          Get a Quote
        </GlobalButton>
      </div>
      <div className="order-1 md:order-2">
        <Image src={graphic} alt="Our Creators" />
      </div>
    </section>
  );
}
