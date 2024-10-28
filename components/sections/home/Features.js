import Image from 'next/image';
import { More_Features } from '../../../constants/constants';

const Features = () => {
  return (
    <section className="m-horizontal section text-white">
      <h2 className="mx-auto text-center text-5xl leading-none lg:w-3/5 lg:text-[60px]">
        For creators, Enterprises, And everyone in between
      </h2>
      <p className="mx-auto mb-s6 mt-s2 w-11/12 text-center font-extralight leading-none lg:w-1/2">
        Our approach is simple. Make content as accessible to as many audiences
        as possible. We also want to make it as easy for anyone as possible
      </p>
      <div className="mt-2 grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {More_Features.map((featureItem, index) => {
          return (
            <div key={featureItem.index} className="">
              <div className="my-4 rounded-xl bg-white-transparent px-6 py-12">
                {featureItem.index === 1 || featureItem.index === 4 ? (
                  <div
                    className={`grid grid-cols-${
                      featureItem.index === 1 ? 3 : 4
                    } gap-6 p-1`}
                  >
                    <GridImage imageData={featureItem.options} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Image
                      src={featureItem.options}
                      alt={featureItem.title}
                      width={200}
                      height={100}
                    />
                  </div>
                )}
              </div>
              <p className="text-2xl font-bold">{featureItem.title}</p>
              <p className="mt-s1 text-base font-extralight lg:mt-s2">
                {featureItem.desc}
              </p>
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
      {imageData.map((image, index) => {
        return <Image src={image} alt={index} width={35} height={35} key={index}/>;
      })}
    </>
  );
};

export default Features;
