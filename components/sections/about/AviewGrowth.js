import Image from 'next/image';
import { AVIEW_GROWTH } from '../../../constants/constants';
import Card from '../../UI/Card';
import pathLeftToRightSmall from '../../../public/img/graphics/path-left-to-right-small.png';
import pathRightToLeftSmall from '../../../public/img/graphics/path-right-to-left-small.png';
import pathLeftToRightLarge from '../../../public/img/graphics/path-left-to-right-large.png';
import pathRightToLeftLarge from '../../../public/img/graphics/path-right-to-left-large.png';

const AviewsGrowth = () => {
  return (
    <section className="section m-horizontal" data-aos="zoom-out-right" id="aview-growth">
      <h2 className="title mb-s4 md:mb-s10 md:text-center">
        <span className="gradient-text gradient-2">Aview&apos;s</span> Growth
      </h2>
      <div className="flex flex-col">
         {AVIEW_GROWTH.map((item, i) => (
          <>
            <div
              className={`max-w-[332px] md:max-w-[623px] ${
                i % 2 == 1 && 'self-end'
              }`}
              key={item.id}
            >
              <Card borderRadius="2xl">
                <div className="p-s3">
                  <div className="md:mb-s2 md:flex md:items-center md:gap-s4">
                    <div className="mx-auto mb-s2 w-[125px] overflow-hidden md:mx-0 md:mb-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={125}
                        height={125}
                      />
                    </div>
                    <h3 className="mb-s2 max-w-[290px] text-5xl font-bold md:-mb-1 md:text-6xl">
                      <span data-test={item.id} className="gradient-text gradient-2">
                        {item.title}
                      </span>
                    </h3>
                  </div>
                  <p data-test={`${item.id}-desc`} className="text-white md:text-xl">{item.description}</p>
                </div>
              </Card>
            </div>
            {i !== AVIEW_GROWTH.length - 1 ? (
              i % 2 == 0 ? (
                <>
                  <div className="z-10 -my-2 mx-auto w-full max-w-[220px] 2xs:max-w-[269px] md:hidden">
                    <Image
                      src={pathLeftToRightSmall}
                      alt="Growth path"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 -my-2 mx-auto hidden w-full max-w-[696px] md:block">
                    <Image
                      src={pathLeftToRightLarge}
                      alt="Growth path"
                      layout="responsive"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="z-10 -my-2 mx-auto w-full max-w-[220px] 2xs:max-w-[269px] md:hidden">
                    <Image
                      src={pathRightToLeftSmall}
                      alt="Growth path"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 -my-2 mx-auto hidden w-full max-w-[696px] md:block">
                    <Image
                      src={pathRightToLeftLarge}
                      alt="Growth path"
                      layout="responsive"
                    />
                  </div>
                </>
              )
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default AviewsGrowth;
