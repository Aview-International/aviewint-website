import Image from 'next/image';
import {
  PRICING_PAGE_TESTIMONIALS_1,
  PRICING_PAGE_TESTIMONIALS_2,
} from '../../../constants/constants';

const JoinCreators = () => {
  return (
    <section className="m-horizontal text-white">
      <div className="bg-white-transparent px-s3 py-8 rounded-xl">
        <p className="text-5xl font-bold md:text-center md:text-7xl">
          Join these creators who use Aview
        </p>
        <div className="my-s4 grid grid-cols-2 justify-center gap-5 md:my-s8 md:flex">
          {PRICING_PAGE_TESTIMONIALS_1.map((img, i) => (
            <div className="mx-auto md:mx-0" key={i}>
              <Image src={img} alt="" width={120} height={120} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {PRICING_PAGE_TESTIMONIALS_2.map((testimonialImage, i) => (
            <div
              key={i}
              className="mx-s3 h-auto max-w-[95px] md:mx-s7 md:max-w-[160px]"
            >
              <Image src={testimonialImage} alt={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinCreators;
