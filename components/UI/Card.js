import Shadow from './Shadow';
import Border from './Border';

const Card = ({ children }) => {
  return (
    <Shadow classes="h-full max-w-[332px] md:max-w-none mx-auto w-full">
      <Border borderRadius="2xl" classes="h-full w-full">
        <div className="relative h-full rounded-2xl bg-black py-s5 px-s4 md:py-s6 md:px-s3">
          {children}
        </div>
      </Border>
    </Shadow>
  );
};

export default Card;
