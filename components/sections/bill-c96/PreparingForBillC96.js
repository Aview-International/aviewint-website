import Image from 'next/image';
import landingGraphic from '../../../public/img/graphics/bill-c96.png';
import GlobalButton from '../../UI/GlobalButton';
import background from '../../../public/img/graphics/bill-c96-background.svg';

const PreparingForBillC96 = () => {
  return (
    <>
      <div className="absolute -z-10 w-full opacity-60">
        <Image
          src={background}
          layout="responsive"
          alt="Bill C-96 background"
        />
      </div>
      <section className="section m-horizontal grid items-center gap-s9 lg:grid-cols-[4fr_5fr]">
        <div className="mt-s8">
          <h1 className="title mb-s2">
            Preparing for{' '}
            <span className="gradient-text gradient-2">Bill C-96</span>
          </h1>
          <p className="body mb-s4 text-white">
            Aview will ensure you are ready and prepared for the roll out of
            Bill C-96.
          </p>
          <GlobalButton type="primary" purpose="route" route="#contact">
            Contact Us
          </GlobalButton>
        </div>
        <div className="mx-auto max-w-[500px] lg:max-w-none">
          <Image src={landingGraphic} alt="Preparing for Bill C-96" />
        </div>
      </section>
    </>
  );
};

export default PreparingForBillC96;
