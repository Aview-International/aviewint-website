import Image from 'next/image';
import quoteIcon from '../../../public/img/icons/quote.svg';

export default function Fans({ title, fans }) {
  return (
    <div className="section m-horizontal md:text-center">
      <h2 className="h2 md:title mb-s5 md:mb-s8">{title}</h2>
      <div className="flex flex-wrap justify-center gap-s5">
        {fans.map((fan) => (
          <div
            className="w-full text-center sm:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
            key={fan.name}
          >
            <div className="mb-s1 inline-block max-w-[120px]">
              <Image src={fan.image} alt={fan.name} />
            </div>
            <p className="mb-s1 text-2xl font-bold text-white">{fan.name}</p>
            <p className="mb-s2 text-lg text-white md:text-xl">
              {fan.description}
            </p>
            <div className="mb-s2 inline-block w-6">
              <Image src={quoteIcon} alt="quote icon" />
            </div>
            <p
              className="body text-left"
              dangerouslySetInnerHTML={{ __html: fan.quote }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
