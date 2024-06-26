import { Widget } from '@typeform/embed-react';

const ContactSales = () => {
  return (
    <section
      className="section m-horizontal -mt-s4 pt-s4 text-white md:-mt-s8 md:pt-s8"
      id="generate-aview"
      data-aos="zoom-in"
    >
      <h2 className="title mb-s4 text-center">
        Contact <span className="gradient-text gradient-2">Sales</span>
      </h2>
      <div className="h-[38rem] w-full">
        <Widget id="JhSA3lfn" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default ContactSales;
