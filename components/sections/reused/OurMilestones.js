import Row3 from '../../layout/Row3';
import Card from '../../UI/Card';
import { OUR_MILESTONES } from '../../../constants/constants';
import { useState, useRef, useEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';

const OurMilestones = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 md:mb-s10 md:text-center">
        Our <span className="gradient-text gradient-2">Milestones</span>
      </h2>
      <Row3>
        {OUR_MILESTONES.map((milestone) => (
          <Milestone milestone={milestone} key={milestone.id} />
        ))}
      </Row3>
    </section>
  );
};

const Milestone = ({ milestone }) => {
  const [number, setNumber] = useState(0);
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  const updateSpeed = 2000 / milestone.end;

  useEffect(() => {
    const updateNumber = () => {
      if (isOnScreen) {
        if (number < milestone.end) {
          setNumber((number) => Math.min(number + 2, milestone.end));
          setTimeout(updateNumber, updateSpeed);
        }
      }
    };
    updateNumber();
  }, [isOnScreen]);

  return (
    <Card borderRadius="2xl">
      <div className="py-s5 text-center md:py-s9">
        <p
          className="gradient-2 gradient-text inline-block text-7xl font-bold md:text-8xl"
          ref={elementRef}
        >
          {number}
          {milestone.suffix}
        </p>
        <p className="mx-auto max-w-[168px] text-lg font-bold text-white md:max-w-[219px] md:text-2xl">
          {milestone.text}
        </p>
      </div>
    </Card>
  );
};

export default OurMilestones;
