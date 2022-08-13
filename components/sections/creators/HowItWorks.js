import Image from 'next/image';
import howItWorksSmall from '../../../public/img/graphics/how-it-works-small.svg';
import howItWorksLarge from '../../../public/img/graphics/how-it-works-large.svg';

const HowItWorks = () => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s4 md:mb-s10">
        <span className="gradient-text gradient-2">How It Works</span>
      </h2>
      <div className="mx-auto hidden max-w-[1030px] md:block">
        <Image src={howItWorksLarge} alt="How it works graphic" />
      </div>
      <div className="mx-auto max-w-[380px] md:hidden">
        <Image src={howItWorksSmall} alt="How it works graphic" />
      </div>
    </section>
  );
};

export default HowItWorks;
