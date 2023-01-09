import Image from 'next/image';

export default function Socials({ title, buttons }) {
  return (
    <div className="section m-horizontal text-center">
      <h2 className="h2 md:title mb-s5">{title}</h2>
      <div className="flex justify-center gap-s2">
        {buttons.map((button, i) => (
          <a
            className="h-[40px] w-[40px]"
            href={button.link}
            target="_blank"
            rel="noreferrer"
            key={`social-${i}`}
          >
            <Image src={button.image} alt={button.text} />
          </a>
        ))}
      </div>
    </div>
  );
}
