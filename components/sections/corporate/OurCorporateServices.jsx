import Image from 'next/image';
import GlobalButton from '../../UI/GlobalButton';
import graphic from '../../../public/img/graphics/corporate/our-corporate-services.png';

export default function OurCorporateServices() {
  return (
    <section className="section m-horizontal grid gap-s3 md:mt-s8 md:grid-cols-2 md:items-center md:gap-s5">
      <div className="order-2 md:order-1">
        <h1 className="title mb-s2">
          Our Corporate{' '}
          <span className="gradient-1 gradient-text">Services</span>
        </h1>
        <p className="body mb-s4">
          Aview is a multimedia translation company working with brands and
          organization to expand their content internationally.
        </p>
        <GlobalButton type="primary" purpose="route" route="#generate-aview">
          Get a Quote
        </GlobalButton>
      </div>
      <div className="order-1 md:order-2">
        <Image src={graphic} alt="Our Corporate Services" />
      </div>
    </section>
  );
}
