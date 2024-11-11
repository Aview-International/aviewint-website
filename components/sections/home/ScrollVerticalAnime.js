import Image from 'next/image';
import {
  LANDNG_PAGE_TESTIMONIALS,
  LANDNG_PAGE_TESTIMONIALS_REVERSE,
} from '../../../constants/constants';

const ScrollVerticalAnime = () => {
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-in">
      <h2 className="mx-auto w-full text-center text-5xl font-bold leading-none lg:w-[85%] lg:text-[48px]">
        Chosen by the World&apos;s Leading{' '}
        <span className="inline lg:block lg:text-center">
          Creators and Innovative Enterprises
        </span>
      </h2>
      <div className="relative mt-s8 overflow-hidden">
        <div className="animate-images flex w-fit gap-x-6">
          {[...Array(3)].map((_, setIndex) => (
            <div className="flex shrink-0 gap-6" key={`set-${setIndex}`}>
              {LANDNG_PAGE_TESTIMONIALS.map((img, i) => (
                <div
                  className="h-44 w-44 shrink-0"
                  key={`image-${setIndex}-${i}`}
                >
                  <Image
                    src={img}
                    alt={`aview-internatinal-testimonial-${i}`}
                    width="220"
                    height="220"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-s8 overflow-hidden">
        <div className="animate-images flex w-fit gap-x-6">
          {[...Array(3)].map((_, setIndex) => (
            <div className="flex shrink-0 gap-6" key={`set-${setIndex}`}>
              {LANDNG_PAGE_TESTIMONIALS_REVERSE.map((img, i) => (
                <div
                  className="h-44 w-44 shrink-0"
                  key={`image-${setIndex}-${i}`}
                >
                  <Image
                    src={img}
                    alt={`aview-internatinal-testimonial-${i}`}
                    width="220"
                    height="220"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollVerticalAnime;
