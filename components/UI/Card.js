import Shadow from './Shadow';
import Border from './Border';

const Card = ({ children, borderRadius, fullWidth }) => {
  return (
    <Shadow
      classes={`${
        !fullWidth && 'max-w-[332px]'
      } md:max-w-none mx-auto w-full h-full`}
    >
      <Border borderRadius={borderRadius} classes="h-full w-full">
        <div className={`relative h-full rounded-${borderRadius} bg-black`}>
          {children}
        </div>
      </Border>
    </Shadow>
  );
};

export default Card;
