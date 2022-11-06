import { useState } from 'react';
import { initiateBot } from '../../utils/submit-form';
import Button from '../UI/Button';
import PhoneNumberInput from './PhoneNumberInput';

const PhoneNumberWithButton = ({ setShowText }) => {
  const [phone, setPhone] = useState({
    phone: '',
    hasSubmitted: false,
  });
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="lg:flex lg:justify-between lg:gap-s2"
      onSubmit={handleSubmit}
    >
      <div className="mb-s2 lg:mb-0 lg:grow">
        <PhoneNumberInput
          onChange={(e) => setPhone({ ...phone, phone: e })}
          value={phone.phone}
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
export default PhoneNumberWithButton;
