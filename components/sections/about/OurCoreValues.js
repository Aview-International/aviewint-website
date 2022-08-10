import Row3 from '../../layout/Row3';
import { OUR_CORE_VALUES } from '../../../constants/constants';
import Card from '../../UI/Card';
import HoverGradientFill from '../../UI/HoverGradientFill';
import Image from 'next/image';

const OurCoreValues = () => {
  return (
    <section className="section m-horizontal md:text-center">
      <h2 className="title mb-s2">
        Our <span className="gradient-text gradient-2">Core Values</span>
      </h2>
      <p className="body pb-s4 md:pb-s10">
        Aview focuses on three main items when it comes to our service. We know
        every creator is different and tailor our approach.
      </p>
      <Row3>
        {OUR_CORE_VALUES.map((value) => (
          <CoreValue
            key={value.id}
            title={value.title}
            description={value.description}
            graphic={value.graphic}
          />
        ))}
      </Row3>
    </section>
  );
};

const CoreValue = ({ title, description, graphic }) => {
  return (
    <div className="group">
      <Card borderRadius="2xl">
        <HoverGradientFill borderRadius="2xl" />
        <div className="relative mb-s2 p-s3">
          <p className="text-left">
            <span className="gradient-text gradient-2 text-8xl font-bold group-hover:text-white">
              {title}
            </span>
          </p>
          <div className="mx-auto mb-s2 max-w-[225px]">
            <Image src={graphic} alt={title} />
          </div>
          <p className="body text-left">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default OurCoreValues;
