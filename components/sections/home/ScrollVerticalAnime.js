import Image from 'next/image';
import { LANDNG_PAGE_TESTIMONIALS } from '../../../constants/constants';

const ScrollVerticalAnime = () => {
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-in">
      <h2 className="mx-auto w-full text-center text-5xl leading-none lg:w-[85%] lg:text-[60px]">
        Chosen by the World&apos;s Leading{' '}
        <span className="inline lg:block lg:text-center">
          Creators and Innovative Enterprises
        </span>
      </h2>

      <div className="mt-s8 hidden grid-cols-4 place-items-center gap-x-2 gap-y-8 md:grid">
        {LANDNG_PAGE_TESTIMONIALS.map((img, i) => (
          <div className="h-44 w-44 md:h-60 md:w-60" key={i}>
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

      <div className="relative mt-s8 overflow-hidden md:hidden">
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
    </section>
  );
};

export default ScrollVerticalAnime;
