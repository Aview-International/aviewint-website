import Image from 'next/image';
import Card from './Card';
import HoverGradientFill from './HoverGradientFill';

const GraphicCard = ({ title, description, graphic, direction }) => {
  return (
    <Card borderRadius="2xl">
      <HoverGradientFill borderRadius="2xl" />
      <div
        className={`relative py-s5 px-s4 text-center ${
          direction === 'vertical'
            ? 'md:py-s6 md:px-s3'
            : 'lg:grid lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-s1.5 lg:pl-s1 lg:text-left'
        }`}
      >
        <div
          className={`mx-auto pb-s2 ${direction === 'horizontal' && 'md:pb-0'}`}
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
