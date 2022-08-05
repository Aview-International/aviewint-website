import Link from 'next/link';
import Border from './Border';
import Shadow from './Shadow';

const Button = ({ children, buttonType, isRoute, isSubmit, route }) => {
  return (
    <Shadow>
      <Border borderRadius="full">
        <Link href={route}>
          <a
            className={`
          ${buttonType === 'primary' && `gradient-1 text-black `}
          ${buttonType === 'secondary' && `bg-black text-white `}
          relative block rounded-full px-s5 pt-s1.5 pb-s1 text-lg
        `}
          >
            {children}
          </a>
        </Link>
      </Border>
    </Shadow>
  );
};

export default Button;
