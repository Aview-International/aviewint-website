import Image from 'next/image';
import { LANDNG_PAGE_TESTIMONIALS } from '../../../constants/constants';

const ScrollVerticalAnime = () => {
  return (
     <section className="section m-horizontal text-white" id="scroll-vertical-anime" data-aos="zoom-in">
      <div className="mt-s16 grid h-[944px] w-full max-w-[1240px] grid-cols-1 place-content-center justify-items-center gap-8 rounded-2xl bg-white-transparent md:h-[560px] md:grid-cols-2">
        <div className="flex h-full w-[90%] items-center justify-start p-s1">
          <h2 className="h2">
            Chosen by the World&apos;s Leading Creators and Innovative
            Enterprises
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-3 overflow-hidden whitespace-nowrap">
          <div data-test="animate" className="animate-images flex flex-col justify-center gap-y-4">
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

          <div data-test="animate-reverse" className="animate-images-reverse flex flex-col justify-center gap-y-4">
            {LANDNG_PAGE_TESTIMONIALS.reverse().map((img, i) => (
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
      </div>
    </section>
  );
};

export default ScrollVerticalAnime;
