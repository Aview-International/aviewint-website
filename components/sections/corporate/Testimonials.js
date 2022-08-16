import Row3 from '../../layout/Row3';
import { TESTIMONIALS } from '../../../constants/constants';
import Card from '../../UI/Card';
import quoteIcon from '../../../public/img/icons/quote.svg';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center md:mb-s10">
        <span className="gradient-text gradient-2">Testimonials</span>
      </h2>
      <Row3>
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </Row3>
    </section>
  );
};

const Testimonial = ({ text, clientName, clientPicture }) => {
  return (
    <Card borderRadius="2xl">
      <div className="pt-s6 pl-s1">
        <Image src={quoteIcon} alt={quoteIcon} width={32} height={32} />
      </div>
      <div className="px-s3 pb-s5">
        <p className="text-xl text-white">{text}</p>
      </div>
      <div className="relative">
        <div className="absolute top-[60px] right-0 left-0 bottom-0 bg-gradient-to-b from-[rgba(255,255,255,0.075)52.08%] to-[rgba(255,255,255,0)]"></div>
        <div className="mx-auto h-[125px] w-[125px] overflow-hidden rounded-full">
          <Image
            src={clientPicture}
            width={125}
            height={125}
            alt={clientName}
          />
        </div>
        <p className="mt-s1 pb-s6 text-center text-4xl font-bold text-white">
          {clientName}
        </p>
      </div>
    </Card>
  );
};

export default Testimonials;
