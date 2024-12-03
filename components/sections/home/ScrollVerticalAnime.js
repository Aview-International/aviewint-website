import Image from 'next/image';
import {
  LANDNG_PAGE_TESTIMONIALS,
  LANDNG_PAGE_TESTIMONIALS_REVERSE,
} from '../../../constants/constants';

const ScrollVerticalAnime = () => {
  return (
    <section className="section text-white m-horizontal" data-aos="zoom-in">
      <h2 className="mx-auto w-full text-center text-5xl font-bold lg:w-[85%] lg:text-8xl">
        Chosen by the World&apos;s Leading{' '}
        <span className="inline lg:block lg:text-center">
          Creators and Innovative Enterprises
        </span>
      </h2>
      <div className="relative mt-s8 overflow-hidden">
        <div className="animate-scroll flex w-fit gap-x-6">
          {[...Array(4)].map((_, setIndex) => (
            <div className="flex shrink-0 gap-8" key={`set-${setIndex}`}>
              {LANDNG_PAGE_TESTIMONIALS.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="aviewint-testimonials"
                  width={240}
                  height={240}
                  className="rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-s8 overflow-hidden">
        <div className="animate-scroll flex w-fit gap-x-6">
          {[...Array(4)].map((_, setIndex) => (
            <div className="flex shrink-0 gap-8" key={`set-${setIndex}`}>
              {LANDNG_PAGE_TESTIMONIALS_REVERSE.map((img, i) => (
                <Image
                  src={img}
                  key={i}
                  alt="aviewint-tesimonials"
                  width={240}
                  height={240}
                  className="rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollVerticalAnime;
