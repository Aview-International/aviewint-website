import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import Logo from '../../../public/img/aview/logo.svg';
import { useEffect, useState } from 'react';

export const LANGUAGES_MENU = [
  'English',
  'French',
  'Hindi',
  'Spanish',
  'Arabic',
  'Portuguese',
  'Bengali',
  'Russian',
  'Urdu',
  'Indonesian',
  'German',
  'Japanese',
  'Marathi',
  'Telugu',
  'Dutch',
  'Tagalog',
];

const AiTools = () => {
  return (
    <section className="m-horizontal section text-white">
      <h2 className="mx-auto text-center text-5xl font-bold lg:text-7xl">
        AI Tools To Help You Succeed
      </h2>
      <p className="mb-s6 mt-s2 text-center font-extralight">
        Try our set of AI tools to see our capabilities
      </p>
      <div className="mt-s8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className={'col-span-1 md:col-span-2'}>
          <FirstContainer
            title={AI_Tools[0].title}
            desc={AI_Tools[0].desc}
            image={AI_Tools[0].image}
          />
        </div>
        {AI_Tools.slice(1).map((tool, i) => (
          <div key={i} className={'col-span-1 max-w-[600px]'}>
            <ToolsContainer
              title={tool.title}
              desc={tool.desc}
              image={tool.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ToolsContainer = ({ title, desc, image }) => {
  return (
    <div className="flex h-full  w-full flex-col justify-start gap-y-2 rounded-2xl bg-white-transparent py-s3">
      <div className={`relative h-full w-full px-6`}>
        {image ? (
          <Image src={image} alt={title} className="block h-full w-full" />
        ) : (
          <div className="border-1 flex h-full w-full overflow-hidden rounded-xl border border-white-transparent">
            <div className="flex h-full flex-col justify-between">
              {[...Array(3)].map((_, idx) => (
                <div
                  className={`${
                    idx === 1
                      ? 'animate-images-anime-first'
                      : idx === 2
                      ? 'animate-images-anime'
                      : 'animate-images-anime-second'
                  } relative my-2 flex h-[100px] w-full gap-x-4`}
                  key={idx}
                >
                  {LANGUAGES_MENU.map((language, index) => (
                    <AnimeImage key={index} language={language} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <h4 className="mt-s4 mb-s2 px-s3 text-xl font-semibold md:text-5xl">
        {title}
      </h4>
      <p className="px-s3 font-light">{desc}</p>
    </div>
  );
};

const AnimeImage = ({ language }) => {
  const [subscribers, setSubscribers] = useState(null);
  useEffect(() => {
    setSubscribers(Math.floor(Math.random() * 141) + 180);
  }, []);

  return (
    <div className="hover:gradient-1 flex shrink-0 items-center rounded-lg bg-white-transparent px-3 py-2">
      <Image
        src={Logo}
        alt="aview"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div className="ml-s2">
        <p className="w-full text-sm">Aview International {language}</p>
        <p className="text-xs">{subscribers}k subscribers</p>
      </div>
    </div>
  );
};

const FirstContainer = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col-reverse gap-s4 rounded-2xl bg-white-transparent p-s3 md:flex-row md:gap-s9">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h4 className="mb-s2 text-xl font-semibold md:text-5xl">{title}</h4>
        <p className="font-light">{desc}</p>
      </div>

      <div className="flex-1">
        <Image src={image} alt={title} className="object-contain" />
      </div>
    </div>
  );
};

export default AiTools;
