import Image from 'next/image';
import Button from '../../UI/Button';
import graphic from '../../../public/img/graphics/corporate/our-corporate-services.png';

export default function OurCorporateServices() {
  return (
    <section className="section m-horizontal mt-s6 grid gap-s5 md:mt-s8 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="title mb-s2">
          Our Corporate{' '}
          <span className="gradient-1 gradient-text">Services</span>
        </h1>
        <p className="body mb-s4">
          Aview is a multimedia translation company working with brands and
          organization to expand their content internationally.
        </p>
        <Button type="primary" purpose="route" route="#generate-aview">
          Get a Quote
        </Button>
      </div>
      <div>
        <Image src={graphic} alt="Our Corporate Services" />
      </div>
    </section>
  );
}
