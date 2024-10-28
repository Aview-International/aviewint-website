import Image from 'next/image';
import { LANDNG_PAGE_TESTIMONIALS } from '../../../constants/constants';

const ScrollVerticalAnime = () => {
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-in">
      <h2 className="mx-auto mb-s6 w-full text-center text-5xl leading-none lg:w-[85%] lg:text-[60px]">
        Chosen by the World&apos;s Leading{' '}
        <span className="inline lg:block lg:text-center">
          Creators and Innovative Enterprises
        </span>
      </h2>
      <div className="mt-s2 flex flex-row justify-center gap-3 overflow-hidden whitespace-nowrap">
        <div className="animate-images flex flex-row justify-center gap-y-4">
          {LANDNG_PAGE_TESTIMONIALS.map((img, i) => (
            <div className="h-36 w-36 md:h-60 md:w-60" key={i}>
              <Image
                src={img}
                alt=""
                width="180"
                height="180"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollVerticalAnime;
