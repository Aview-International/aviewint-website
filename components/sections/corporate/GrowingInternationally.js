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
      <div className="flex flex-row flex-wrap justify-center gap-s4 pb-s4 xs:gap-s8 md:pb-s10 xl:gap-s16">
        {GROW_CUSTOMERS_INTERNATIONALLY.map(({ id, name, icon }) => (
          <div key={id}>
            <Image src={icon} alt={name} width={125} height={125} />
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
