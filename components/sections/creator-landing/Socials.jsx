import Image from 'next/image';

export default function Socials({ title, buttons }) {
  return (
    <div className="section m-horizontal text-center">
      <h2 className="h2 md:title mb-s5">{title}</h2>
      <div className="flex justify-center gap-s2">
        {buttons.map((button) => (
          <a
            className="gradient-1 grid h-[40px] w-[40px] place-content-center rounded-full p-2"
            href={button.link}
            key={button.text}
          >
            <Image src={button.image} alt={button.text} />
          </a>
        ))}
      </div>
    </div>
  );
}
