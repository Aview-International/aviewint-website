import Image from 'next/image';
import howItWorksSm from '../../../../public/img/graphics/corporate/translations/how-it-works-sm.svg';
import howItWorksLg from '../../../../public/img/graphics/corporate/translations/how-it-works-lg.svg';

export default function HowItWorks() {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-10 md:mb-20">
        How It <span className="gradient-text gradient-2">Works</span>
      </h2>
      <div className="md:hidden">
        <Image src={howItWorksSm} alt="how it works" />
      </div>
      <div className="hidden md:block">
        <Image src={howItWorksLg} alt="how it works" />
      </div>
    </section>
  );
}
