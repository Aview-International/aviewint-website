import { useState } from 'react';
import PhoneNumberWithButton from '../../FormComponents/PhoneNumberWithButton';

const WorkWithUs = () => {
  const [showText, setShowText] = useState(false);
  return (
    <section
      className="m-horizontal section w-full md:w-[60%]"
      data-aos="zoom-in-left"
    >
      <h2 className="title">
        Work With <span className="gradient-1 gradient-text">Us</span>
      </h2>
      <p className="mt-s2 mb-s4 text-xl text-white">
        At AVIEW, we work with all sizes of content creators. Leave your number
        and our team will be in touch
      </p>
      <PhoneNumberWithButton setShowText={setShowText} />
    </section>
  );
};

export default WorkWithUs;
