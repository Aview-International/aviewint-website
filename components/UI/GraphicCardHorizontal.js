import Image from 'next/image';
import Card from './Card';
import HoverGradientFill from './HoverGradientFill';

const GraphicCard = ({ title, description, graphic, direction }) => {
  return (
    <Card borderRadius="2xl">
      <HoverGradientFill borderRadius="2xl" />
      <div
        className={`relative py-s2 px-s1 text-center ${
          direction === 'vertical'
            ? 'md:py-s6 md:px-s3'
            : 'lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-s1.5 lg:pl-s1'
        }`}
      >
        <div
          className={'mx-auto pb-s2 max-w-[200px]'}
        >
          <Image src={graphic} alt={title} />
        </div>
        <div>
          <p className="pb-s2 text-5xl font-bold text-white md:text-6xl">
            {title}
          </p>
          <p className="text-lg text-white md:text-xl">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default GraphicCard;
