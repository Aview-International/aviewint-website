import { LANDING_PAGE_TYPES } from '../../../constants/constants';
import Image from 'next/image';

const ContentCreators = () => {
  return (
    <section className="section m-horizontal text-white" id="content-creators" data-aos="zoom-in">
      <div className="mx-auto grid w-full grid-cols-1 place-content-center place-items-center gap-s25 p-3">
        {LANDING_PAGE_TYPES.map((itemType, idx) => (
          <div
            className="flex w-full flex-col items-center justify-between gap-s5 md:flex-row md:gap-s14"
            key={idx}
          >
            <div className="w-full flex justify-center items-center md:pr-s18">
              <Image
                src={itemType.image}
                alt={`about-${itemType.title}`}
                width={itemType.imageWidth}
                height={itemType.imageHeight}
                placeholder='blur'
                className='rounded-2xl'
              />
            </div>
            <div className="flex w-full max-w-[430px] flex-col gap-y-5 p-0">
              <p className="w-full text-4xl font-semibold md:w-5/6 md:text-6xl">
                {itemType.title}
              </p>
              <p className="text-base md:text-lg">{itemType.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentCreators;
