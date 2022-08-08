import Image from 'next/image';
import Border from './Border';
import HoverGradientFill from './HoverGradientFill';
import Shadow from './Shadow';

const GraphicCard = ({ title, description, graphic }) => {
  return (
    <Shadow classes="h-full max-w-[332px] md:max-w-none mx-auto">
      <Border borderRadius="2xl" classes="h-full">
        <div className="relative h-full rounded-2xl bg-black py-s5 px-s4 md:py-s6 md:px-s3">
          <HoverGradientFill borderRadius="2xl" />
          <div className="relative text-center">
            <div className="mx-auto max-w-[225px] pb-s2">
              <Image src={graphic} alt={title} />
            </div>
            <p className="pb-s2 text-5xl font-bold text-white md:text-6xl">
              {title}
            </p>
            <p className="text-lg text-white md:text-xl">{description}</p>
          </div>
        </div>
      </Border>
    </Shadow>
  );
};

export default GraphicCard;
