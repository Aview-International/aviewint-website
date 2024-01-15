import Link from 'next/link';
import Border from './Border';
import Shadow from './Shadow';
import HoverGradientFill from './HoverGradientFill';

const Button = ({
  children,
  type,
  purpose,
  route,
  onClick,
  externalLink,
  fullWidth,
}) => {
  let button = (
    <div
      className={`
          ${type === 'primary' && `gradient-1 text-black `}
          ${type === 'secondary' && `bg-black text-white hover:text-black `}
          ${
            type === 'tertiary' &&
            `border-[3px] border-solid border-white bg-transparent text-white hover:bg-white hover:text-black `
          }
          transition-300 relative block cursor-pointer rounded-full px-s5 pt-s1.5 pb-s1 text-lg font-medium ${
            fullWidth ? 'w-full text-center' : 'w-max'
          }
        `}
    >
      {type === 'secondary' && (
        <HoverGradientFill
          borderRadius="full"
          classes={fullWidth ? 'w-full' : ''}
        />
      )}
      <span className="relative">{children}</span>
    </div>
  );

  if (purpose === 'route') {
    button = (
      <Link href={route}>
        <a>{button}</a>
      </Link>
    );
  } else if (purpose === 'submit') {
    button = <button type="submit">{button}</button>;
  } else if (purpose === 'onClick') {
    button = <div onClick={onClick}>{button}</div>;
  } else if (purpose === 'externalLink') {
    button = (
      <a href={externalLink} target="_blank" rel="noreferrer">
        {button}
      </a>
    );
  }

  if (type !== 'tertiary') {
    button = (
      <Shadow classes={fullWidth ? 'w-full' : ''}>
        <Border borderRadius="full" classes={fullWidth ? 'w-full' : ''}>
          {button}
        </Border>
      </Shadow>
    );
  }

  return button;
};

export default Button;
