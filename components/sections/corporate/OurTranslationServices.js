import Image from 'next/image';
import howWeCanHelpGraphic from '../../../public/img/graphics/how-we-can-help.png';
import { OUR_TRANSLATION_SERVICES } from '../../../constants/constants';

const OurTranslationServices = () => {
  return (
    <section className="section m-horizontal" data-aos="zoom-out-down">
      <h2 className="title mb-s2 md:mb-s2 md:text-center">
        Our Translation{' '}
        <span className="gradient-text gradient-2">Services</span>
      </h2>
      <p className="mb-s4 text-xl text-white md:mb-s10 md:text-center">
        We tailor our approach to fit your audience growth goals.
      </p>
      <div className="grid lg:max-w-none lg:grid-cols-[8fr_7fr] lg:items-center">
        <div className="mx-auto max-w-[500px]">
          <Image src={howWeCanHelpGraphic} alt="How we can help" />
        </div>
        <div className="grid gap-s4">
          {OUR_TRANSLATION_SERVICES.map((help) => (
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

export default OurTranslationServices;
