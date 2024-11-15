import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import LoganImage from '../../../public/img/graphics/new-landing-images/testimonial-1.webp';

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
      <h2 className="mx-auto text-center text-5xl font-bold leading-none lg:text-7xl">
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
          <div className="border-white-transparent flex h-full w-full overflow-hidden rounded-xl border border-1">
            <div className="flex h-full flex-col justify-between">
              {[...Array(3)].map((_, idx) => (
                <div
                  className={`${
                    idx === 1
                      ? 'animate-images-anime-first'
                      : 'animate-images-anime'
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

      <h4 className="mt-s4 mb-s2 px-s3 text-xl font-semibold leading-none md:text-5xl">
        {title}
      </h4>
      <p className="px-s3 font-light">{desc}</p>
    </div>
  );
};

const AnimeImage = ({ language }) => {
  return (
    <div className="hover:gradient-1 flex shrink-0 items-center rounded-lg bg-white-transparent px-3 py-2">
      <Image
        src={LoganImage}
        alt="aview"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div className="ml-s2">
        <p className="w-full text-sm">Aview International {language}</p>
        <p className="text-xs">235k subscribers</p>
      </div>
    </div>
  );
};

const FirstContainer = ({ title, desc, image }) => {
  return (
    <div className="flex grid-cols-[2.5fr,2fr] flex-col-reverse rounded-2xl bg-white-transparent md:grid">
      <div className="flex w-11/12 flex-col items-start justify-center gap-y-3 px-s4">
        <h4 className="text-xl font-semibold leading-none md:mt-4 md:text-5xl lg:mt-0">
          {title}
        </h4>
        <p className="pb-s3 font-light">{desc}</p>
      </div>
      <div className="max-h-[400px] max-w-[540px] p-s3">
        <Image
          src={image}
          alt={title}
          width={540}
          height={360}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AiTools;
