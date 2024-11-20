import Image from 'next/image';
import { More_Features } from '../../../constants/constants';

const Features = () => {
  return (
    <section className="m-horizontal section text-white" data-aos="fade-in">
      <h2 className="mx-auto text-center text-5xl font-bold md:w-3/5 lg:text-[48px]">
        For creators, Enterprises, And everyone in between
      </h2>
      <p className="mx-auto mb-s6 mt-s1 w-11/12 text-center font-extralight md:mt-s2 lg:w-1/2">
        Our approach is simple. Make content as accessible to as many audiences
        as possible. We also want to make it as easy for anyone as possible
      </p>
      <div className="mt-2 grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {More_Features.map((featureItem) => {
          const isGridImage =
            featureItem.index === 1 || featureItem.index === 4;

          return (
            <div key={featureItem.index} className="flex h-full flex-col">
              <div className="h-[350px] sm:h-[380px] md:h-[400px]">
                <div className="mb-6 h-[180px] rounded-xl bg-white-transparent">
                  {isGridImage ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <div
                        className={`grid w-full place-items-center gap-6 px-6 ${
                          featureItem.index === 1
                            ? 'grid-cols-3'
                            : 'grid-cols-4'
                        }`}
                      >
                        <GridImage imageData={featureItem.options} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex h-[180px] w-full items-center justify-center">
                      <div className="absolute max-w-[280px] px-3">
                        <Image
                          src={featureItem.options}
                          alt={featureItem.title}
                          className="object-contain"
                          width={250}
                          height={250}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="min-h-[60px] md:min-h-[72px]">
                    <h3 className="line-clamp-2 text-2xl font-semibold leading-tight">
                      {featureItem.title}
                    </h3>
                  </div>
                  <p className="line-clamp-4 text-base font-extralight">
                    {featureItem.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const GridImage = ({ imageData }) => {
  return (
    <>
      {imageData.map((image, index) => (
        <div key={index} className="relative h-[35px] w-[35px]">
          <Image
            src={image}
            alt={`icon-${index}`}
            className="object-contain"
            sizes="35px"
          />
        </div>
      ))}
    </>
  );
};

export default Features;
