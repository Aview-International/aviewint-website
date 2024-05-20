import Row3 from '../../layout/Row3';
import { OUR_CORE_VALUES } from '../../../constants/constants';
import Card from '../../UI/Card';
import HoverGradientFill from '../../UI/HoverGradientFill';
import Image from 'next/image';

const OurCoreValues = () => {
  return (
    <section
      className="section m-horizontal md:text-center"
      data-aos="zoom-out-left"
      id="core-values"
    >
      <h2 data-test="core-values-heading" className="title mb-s2">
        Our <span className="gradient-text gradient-2">Core Values</span>
      </h2>
      <p data-test="core-values-body" className="body pb-s4 md:pb-s10">
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
            id={value.id}
          />
        ))}
      </Row3>
    </section>
  );
};

const CoreValue = ({ title, description, graphic, id }) => {
  return (
    <Card borderRadius="2xl">
      <HoverGradientFill borderRadius="2xl" />
      <div className="relative p-s3">
        <p className="text-left">
          <span data-test={id} className="gradient-text gradient-2 text-8xl font-bold group-hover:text-white">
            {title}
          </span>
        </p>
        <div className="mx-auto max-w-[225px] pb-s2">
          <Image src={graphic} alt={title} />
        </div>
        <p data-test={`${id}-desc`} className="body text-left">{description}</p>
      </div>
    </Card>
  );
};

export default OurCoreValues;
