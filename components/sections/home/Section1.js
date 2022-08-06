import TextInput from '../../UI/TextInput';
import Button from '../../UI/Button';
import landingGraphic from '../../../public/img/graphics/home-landing.png';
import Shadow from '../../UI/Shadow';
import Border from '../../UI/Border';
import Image from 'next/image';
import { MILESTONES } from '../../../constants/constants';
import { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Section1 = () => {
  return (
    <section className="section m-horizontal mt-s8 lg:mt-s17">
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="title mb-s2">
            Translate Your&nbsp;
            <span className="gradient-text gradient-2">
              Social Media Content
            </span>
          </h1>
          <p className="body mb-8">
            Start increasing your international fanbase AVIEW at a time.
          </p>
          <PhoneNumberForm />
        </div>
        <div className="mx-auto mt-s9 -mb-2 max-w-[500px] lg:-m-s2 lg:max-w-full">
          <Image src={landingGraphic} alt="landing-graphic" />
        </div>
      </div>
      <Milestones />
    </section>
  );
};

const PhoneNumberForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validateSchema = Yup.object().shape({
    phoneNumber: Yup.string().matches(
      phoneRegExp,
      'Enter a valid phone number.'
    ),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({
          query: data,
        }),
      });
      console.log(response, 'Form submitted successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setValue('phoneNumber', '');
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validateSchema),
  });

  return (
    <form
      name="phone-number"
      method="POST"
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      data-netlify="true"
      className="lg:flex lg:justify-between lg:gap-s2"
    >
      <div className="mb-s2 lg:mb-0 lg:grow">
        <div className="w-full">
          <Shadow classes="w-full">
            <Border borderRadius="md" classes="w-full">
              <input
                type="tel"
                {...register('phoneNumber')}
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full rounded-md bg-black px-s2 py-2 text-lg text-white placeholder:font-light placeholder:text-white focus:outline-none md:text-xl"
              />
            </Border>
          </Shadow>
          <p className="text-red">{errors.phoneNumber?.message}</p>
        </div>
        {/* <TextInput type="tel" name="phone-number" placeholder="Phone Number" /> */}
      </div>
      <Button type="primary" purpose="submit">
        Get Started
      </Button>
    </form>
  );
};

const Milestones = () => {
  return (
    <Shadow classes="w-full">
      <Border classes="w-full" borderRadius="2xl">
        <div className="grid justify-center gap-s10 rounded-2xl bg-black py-10 md:grid-cols-3 md:gap-[10%] md:py-6">
          {MILESTONES.map((milestone) => (
            <Milestone key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </Border>
    </Shadow>
  );
};

const Milestone = ({ milestone }) => {
  const [number, setNumber] = useState(0);
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const updateNumber = () => {
      if (isOnScreen) {
        if (number < milestone.end) {
          setNumber((number) => Math.min(number + 2, milestone.end));
          setTimeout(updateNumber, 2000 / milestone.end);
        }
      }
    };
    updateNumber();
  }, [isOnScreen]);

  return (
    <div className="text-center">
      <p
        className="gradient-text gradient-1 text-8xl font-bold"
        ref={elementRef}
      >
        {number}
        {milestone.suffix}
      </p>
      <p className="mx-auto max-w-[220px] text-2xl font-bold text-white">
        {milestone.text}
      </p>
    </div>
  );
};

export default Section1;
