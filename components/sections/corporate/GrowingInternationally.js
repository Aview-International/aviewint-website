import Image from 'next/image';
import { GROW_CUSTOMERS_INTERNATIONALLY } from '../../../constants/constants';
import Button from '../../UI/Button';

const GrowingInternationally = () => {
  return (
    <section className="section m-horizontal text-center">
      <p className="gradient-text gradient-2 mb-s2 inline-block text-lg font-bold md:text-2xl">
        Content Creators We&apos;ve Worked With
      </p>
      <h2 className="mb-s4 text-5xl font-bold text-white md:mb-s10 md:text-8xl">
        Growing our customers internationally
      </h2>
      <div className="mb-s4 grid grid-cols-2 gap-x-s2 gap-y-s4 2xs:grid-cols-3 xs:grid-cols-4 xs:gap-x-s4 xs:gap-y-s6 md:mb-s10 md:grid-cols-5 lg:gap-x-s8 lg:gap-y-s10 xl:gap-x-s16 xl:gap-y-s10">
        {GROW_CUSTOMERS_INTERNATIONALLY.map(({ id, name, icon }) => (
          <div key={id}>
            <Image src={icon} alt={name} />
            <p className="mt-s1 text-white md:mt-s2 md:text-lg">{name}</p>
          </div>
        ))}
      </div>
      <Button type="primary" route="#generate-aview" purpose="route">
        Contact Us
      </Button>
    </section>
  );
};

export default GrowingInternationally;
