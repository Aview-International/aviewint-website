import Image from 'next/image';
import howItWorksS from '../../../public/img/graphics/corporate/how-it-works-sm.svg';
import howItWorksL from '../../../public/img/graphics/corporate/how-it-works-lg.svg';

export default function HowItWorks() {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s2">
        How It <span className="gradient-text gradient-1">Works</span>
      </h2>
      <p className="body mb-s10">
        Have your content professionally translated.
      </p>
      <div className="mb-s4 lg:hidden">
        <Image src={howItWorksS} alt="How it works" />
      </div>
      <div className="mb-s4 hidden lg:block">
        <Image src={howItWorksL} alt="How it works" />
      </div>
    </section>
  );
}
