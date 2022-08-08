import Border from './Border';
import Shadow from './Shadow';

const TextInput = ({ placeholder, bgColor, textColor }) => {
  return (
    <div className="w-full">
      <Shadow classes="w-full">
        <Border borderRadius="md" classes="w-full">
          <input
            placeholder={placeholder}
            className={`w-full rounded-md bg-${bgColor} px-s2 py-2 text-lg text-${textColor} placeholder:font-light placeholder:text-${textColor} focus:outline-none md:text-xl`}
          />
        </Border>
      </Shadow>
    </div>
  );
};

export default TextInput;
