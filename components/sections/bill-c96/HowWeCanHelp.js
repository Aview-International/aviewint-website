import Image from 'next/image';
import howWeCanHelpGraphic from '../../../public/img/graphics/how-we-can-help.png';
import { HOW_WE_CAN_HELP } from '../../../constants/constants';

const HowWeCanHelp = () => {
  return (
    <section className="section m-horizontal">
      <p className="mb-s2 text-center text-xl font-bold md:text-2xl">
        <span className="gradient-text gradient-2">How We Can help</span>
      </p>
      <h2 className="title mb-s4 text-center md:mb-s10">
        Avoid the hassle of translations. Trust Aview.
      </h2>
      <div className="grid lg:max-w-none lg:grid-cols-[8fr_7fr] lg:items-center">
        <div className="mx-auto max-w-[500px]">
          <Image src={howWeCanHelpGraphic} alt="How we can help" />
        </div>
        <div className="grid gap-s4">
          {HOW_WE_CAN_HELP.map((help) => (
            <div key={help.id}>
              <p className="gradient-text gradient-2 mb-s2 inline-block text-5xl font-bold md:text-7xl">
                {help.title}
              </p>
              <p className="text-lg text-white">{help.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;
