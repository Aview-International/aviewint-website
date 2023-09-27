import { Widget } from '@typeform/embed-react';

const StartGenerating = ({ formId }) => {
  return (
    <section
      className="hidden md:block section m-horizontal -mt-s4 pt-s4 text-white md:-mt-s8 md:pt-s8"
      id="generate-aview"
      data-aos="zoom-in"
    >
      <div className="h-[38rem] w-full">
        <Widget id={formId} style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default StartGenerating;