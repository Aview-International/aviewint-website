import Border from './Border';
import Shadow from './Shadow';

const TextInput = ({ placeholder }) => {
  return (
    <div className="w-full">
      <Shadow classes="w-full">
        <Border borderRadius="md" classes="w-full">
          <input
            placeholder={placeholder}
            className="w-full rounded-md bg-black px-s2 py-2 text-lg text-white placeholder:font-light placeholder:text-white focus:outline-none md:text-xl"
          />
        </Border>
      </Shadow>
    </div>
  );
};

export default TextInput;
