import Link from 'next/link';
import Border from './Border';
import Shadow from './Shadow';
import HoverGradientFill from './HoverGradientFill';

const Button = ({ children, type, purpose, route }) => {
  const buttonContent = (
    <a
      className={`
          ${type === 'primary' && `gradient-1 text-black `}
          ${type === 'secondary' && `bg-black text-white hover:text-black `}
          ${
            type === 'tertiary' &&
            `border-[3px] border-solid border-white bg-transparent text-white hover:bg-white hover:text-black `
          }
          transition-300 relative block w-max cursor-pointer rounded-full px-s5 pt-s1.5 pb-s1 text-lg
        `}
    >
      {type === 'secondary' && <HoverGradientFill borderRadius="full" />}
      <span className="relative">{children}</span>
    </a>
  );

  const buttonPurpose =
    purpose === 'route' ? (
      <Link href={route}>{buttonContent}</Link>
    ) : (
      purpose === 'submit' && <button type="submit">{buttonContent}</button>
    );

  const button =
    type === 'tertiary' ? (
      buttonPurpose
    ) : (
      <Shadow>
        <Border borderRadius="full">{buttonPurpose}</Border>
      </Shadow>
    );

  return button;
};

export default Button;
