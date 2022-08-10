import Image from 'next/image';
import Card from './Card';
import HoverGradientFill from './HoverGradientFill';

const GraphicCard = ({ title, description, graphic }) => {
  return (
    <Card borderRadius="2xl">
      <HoverGradientFill borderRadius="2xl" />
      <div className="relative py-s5 px-s4 text-center md:py-s6 md:px-s3">
        <div className="mx-auto max-w-[225px] pb-s2">
          <Image src={graphic} alt={title} />
        </div>
        <p className="pb-s2 text-5xl font-bold text-white md:text-6xl">
          {title}
        </p>
        <p className="text-lg text-white md:text-xl">{description}</p>
      </div>
    </Card>
  );
};

export default GraphicCard;
