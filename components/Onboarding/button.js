import Border from '../UI/Border';
import Loader from '../UI/loader';
import Shadow from '../UI/Shadow';

const OnbaordingButton = ({ children, isLoading, onClick }) => {
  return (
    <Shadow classes="w-full">
      <Border borderRadius="full" classes="w-full">
        <button
          className={`transition-300 w-full cursor-pointer rounded-full px-s5 pt-s1.5 pb-s1 text-black`}
          onClick={onClick}
        >
          {isLoading ? <Loader /> : children}
        </button>
      </Border>
    </Shadow>
  );
};

export default OnbaordingButton;
