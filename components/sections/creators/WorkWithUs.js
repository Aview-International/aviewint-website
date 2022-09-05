import { useState } from 'react';
import PhoneNumberInput from '../../FormComponents/PhoneNumberInput';
import Button from '../../UI/Button';

const WorkWithUs = () => {
  const [showText, setShowText] = useState(false);
  const [phone, setPhone] = useState({
    phone: '',
    hasSubmitted: false,
  });
  return (
    <section className="m-horizontal section w-full md:w-[60%]">
      <h2 className="title">
        Work With <span className="gradient-1 gradient-text">Us</span>
      </h2>
      <p className="mt-s2 mb-s4 text-xl text-white">
        At AVIEW, we work with all sizes of content creators. Leave your number
        and our team will be in touch
      </p>
      <PhoneNumberForm
        setPhone={setPhone}
        phone={phone}
        setShowText={setShowText}
      />
    </section>
  );
};

const PhoneNumberForm = ({ setPhone, phone, setShowText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone({ ...phone, hasSubmitted: true });
    if (phone.phone.length < 11 || phone.phone.length > 18) return;
    try {
      initiateBot([
        {
          phoneNumber: phone.phone,
          payLoad: Date.now(),
        },
      ]);
      setShowText(true);
    } catch (error) {}
  };
  return (
    <form
      className="lg:flex lg:justify-between lg:gap-s2"
      onSubmit={handleSubmit}
    >
      <div className="mb-s2 lg:mb-0 lg:grow">
        <PhoneNumberInput
          onChange={(e) => setPhone({ ...phone, phone: e })}
          value={phone.phoner}
          hasSubmitted={phone.hasSubmitted}
          isValid={phone.phone?.length > 11 && phone.phone?.length < 18}
        />
      </div>
      <Button type="primary" purpose="submit">
        Get Started
      </Button>
    </form>
  );
};

export default WorkWithUs;
