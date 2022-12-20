import Image from 'next/image';
import Button from '../../UI/Button';

export default function Landing({ title, description, buttons, image }) {
  return (
    <div className="m-horizontal section mt-s6 grid items-center gap-s8 md:grid-cols-2 lg:mt-s12">
      <div>
        <h1 className="title mb-s2">{title}</h1>
        <p
          className="body mb-s4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-wrap gap-s2">
          {buttons.map((button, i) => (
            <Button
              type={i === 0 ? 'primary' : 'secondary'}
              purpose="externalLink"
              externalLink={button.link}
              key={button.text}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[360px] md:max-w-[520px]">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
}
