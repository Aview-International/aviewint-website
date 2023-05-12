import Border from '../UI/Border';
import Loader from '../../public/loaders/ButtonLoader';
import Shadow from '../UI/Shadow';

const OnboardingButton = ({
  children,
  isLoading,
  onClick,
  disabled,
  theme,
  extraClasses = 'px-s5',
}) => {
  return disabled ? (
    <button
      className={`transition-300 w-full cursor-not-allowed rounded-full bg-gray-1 pt-s1.5 pb-s1 font-medium text-lg text-black ${extraClasses}`}
      onClick={null}
      disabled
    >
      {children}
    </button>
  ) : (
    <Shadow classes="w-full">
      <Border borderRadius="full" classes="w-full">
        <button
          id='opener'
          className={`transition-300 w-full cursor-pointer rounded-full pt-s1.5 pb-s1 font-medium text-lg ${extraClasses} ${
            theme === 'light' && 'text-black'
          } ${theme === 'dark' && 'bg-black text-white'}`}
          onClick={onClick}
        >
          {isLoading ? <Loader /> : children}
        </button>
      </Border>
    </Shadow>
  );
};

export default OnboardingButton;
