import { Widget } from '@typeform/embed-react';

const StartGenerating = () => {
  return (
    <section
      className="section m-horizontal -mt-s4 pt-s4 text-white md:-mt-s8 md:pt-s8"
      id="generate-aview"
      data-aos="zoom-in"
    >
      <h2 className="title mb-s4 text-center">
        Start Generating <span className="gradient-text gradient-2">Aview</span>{' '}
        Today!
      </h2>
      <div className="h-[38rem] w-full">
        <Widget id="t5dW3MSY" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default StartGenerating;