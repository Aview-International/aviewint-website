import Image from 'next/image';
import GlobalButton from '../../UI/GlobalButton';

export default function Description({ title, description, buttons, image }) {
  return (
    <div className="section m-horizontal grid items-center gap-s8 md:grid-cols-2">
      <div className="md:order-2">
        <h2 className="h2 mb-s2">{title}</h2>
        <p
          className="body mb-s4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-wrap gap-s2">
          {buttons.map((button, i) => (
            <GlobalButton
              purpose="externalLink"
              externalLink={button.link}
              type={i === 0 ? 'primary' : 'secondary'}
              key={button.text}
            >
              {button.text}
            </GlobalButton>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[300px] md:max-w-[400px]">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
}
