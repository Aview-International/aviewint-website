import Image from 'next/image';
import goGlobalGraphic from '../../../public/img/graphics/go-global.png';
import PhoneNumberWithButton from '../../FormComponents/PhoneNumberWithButton';
import Button from '../../UI/Button';

const GoGlobal = () => {
  return (
    <section
      className="section m-horizontal mt-s6 grid items-center gap-s7 md:mt-s15 md:grid-cols-[5fr_4fr]"
      data-aos="fade-up"
    >
      <div className="mx-auto w-[200px] sm:w-[380px] md:order-2 md:max-w-none">
        <Image
          src={goGlobalGraphic}
          alt="Go global graphic"
          layout="responsive"
        />
      </div>
      <div className="md:order-1">
        <h1 className="mb-s2 text-5xl font-bold text-white md:text-8xl">
          Go Global.
        </h1>
        <h2 className="mb-s2 text-[28px] font-bold text-white md:text-6xl">
          You <span className="gradient-text gradient-2">Create.</span> We{' '}
          <span className="gradient-text gradient-2">Translate.</span>
        </h2>
        <p className="mb-s4 text-lg text-white md:text-xl">
          Content creation takes time. There are countless challenges when it
          comes to growing your audience - don&apos;t let language be one of
          them.
        </p>
        <PhoneNumberWithButton />
      </div>
    </section>
  );
};

export default GoGlobal;
