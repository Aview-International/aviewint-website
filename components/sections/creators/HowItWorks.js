import Image from 'next/image';
import graphic from '../../../public/img/graphics/how-it-works.png';

const HowItWorks = () => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s4 md:mb-s10">
        <span className="gradient-text gradient-2">How It Works</span>
      </h2>
      <div className="mx-auto max-w-[1030px]">
        <Image src={graphic} alt="How it works graphic" />
      </div>
    </section>
  );
};

export default HowItWorks;
