import phoneInHandGraphic from '../../../public/img/graphics/phone-in-hand.webp';
import Shadow from '../../UI/Shadow';
import Border from '../../UI/Border';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';
import PhoneNumberWithButton from '../../FormComponents/PhoneNumberWithButton';

const YouCreateWeTranslate = () => {
  const [showText, setShowText] = useState(false);

  return (
    <section className="section m-horizontal mt-12 lg:mt-32">
      <div className="grid lg:grid-cols-2">
        <div>
          <h1 className="title mb-4">
            You{' '}
            <span className="gradient-text gradient-2 xs:inline-block">
              Create.
            </span>{' '}
            We{' '}
            <span className="gradient-text gradient-2 xs:inline-block">
              Translate.
            </span>
          </h1>
          <p className="body mb-8 max-w-[575px]">
            At AVIEW, we work with the top translators and voiceover talent so
            that you can quickly grow your international influence, A-View at a
            time.
          </p>
          {showText ? (
            <p className="body mb-8">
              Check your messages to finish your setup!&nbsp;&nbsp;✅
            </p>
          ) : (
            <PhoneNumberWithButton setShowText={setShowText} />
          )}
        </div>
        <div className="mx-auto mt-16 -mb-2 max-w-[500px] lg:-m-4 lg:max-w-full">
          <Image src={phoneInHandGraphic} alt="landing-graphic" priority />
        </div>
      </div>
      <Milestones />
    </section>
  );
};

const MILESTONES = [
  {
    id: 'milestone-1',
    end: 500,
    suffix: 'M+',
    text: 'International Creator Views',
  },
  {
    id: 'milestone-2',
    end: 15,
    suffix: '+',
    text: 'Languages',
  },
  {
    id: 'milestone-3',
    end: 10,
    suffix: 'M+',
    text: 'International Gained Subscribers',
  },
];

const Milestones = () => {
  return (
    <Shadow classes="w-full">
      <Border classes="w-full" borderRadius="2xl">
        <div className="grid justify-center gap-s10 rounded-2xl bg-black py-10 md:grid-cols-3 md:gap-[10%] md:py-s3">
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

export default YouCreateWeTranslate;
