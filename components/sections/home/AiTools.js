import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import Logo from '../../../public/img/aview/logo.svg';
import { useEffect, useState } from 'react';
import modificationImg from '../../../public/img/graphics/new-landing-images/cultural-modifications.webp';
import audioImg from '../../../public/img/graphics/new-landing-images/multi-track-audio.webp';
import ToggleButton from '../../FormComponents/ToggleButton';
import GlobalButton from '../../UI/GlobalButton';
import SmoothCounter from '../../UI/SmoothCounter';

export const LANGUAGES_1 = [
  'English',
  'Hindi',
  'Arabic',
  'German',
  'Bengali',
  'Russian',
  'Japanese',
];

export const LANGUAGES_2 = [
  'French',
  'Spanish',
  'Portuguese',
  'Urdu',
  'Indonesian',
  'Filipino',
  'Turkish',
];

export const LANGUAGES_3 = [
  'Italian',
  'Chinese',
  'Marathi',
  'Korean',
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
        <Voiceovers />
        {AI_Tools.slice(1).map((tool, i) => (
          <div key={i} className={'col-span-1 max-w-[600px]'}>
            <div className="relative flex h-full w-full flex-col justify-start gap-y-2 rounded-2xl bg-white-transparent py-s3 px-s2">
              {Tools[i + 1]}
              <h4 className="mt-s4 mb-s2 px-s3 text-xl font-semibold md:text-5xl">
                {tool.title}
              </h4>
              <p className="px-s3 font-light">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Modification = () => {
  return <Image src={modificationImg} alt="" />;
};

const Audio = () => {
  return <Image src={audioImg} alt="" />;
};

const Distribution = () => {
  return (
    <div className="border-1 h-full w-full overflow-hidden rounded-xl border border-white-transparent">
      <div className="flex h-full flex-col justify-between">
        <div className="animate-scroll relative my-2 flex h-24 w-full gap-x-4 whitespace-nowrap">
          {[...LANGUAGES_1, ...LANGUAGES_1].map((lang, index) => (
            <AnimeImage key={index} lang={lang} />
          ))}
        </div>
        <div className="animate-scroll-reverse relative my-2 flex h-24 w-full flex-row-reverse gap-x-4 whitespace-nowrap">
          {[...LANGUAGES_2, ...LANGUAGES_2, ...LANGUAGES_2, ...LANGUAGES_2].map(
            (lang, index) => (
              <AnimeImage key={index} lang={lang} />
            )
          )}
        </div>
        <div className="animate-scroll relative my-2 flex h-24 w-full gap-x-4 whitespace-nowrap">
          {[...LANGUAGES_3, ...LANGUAGES_3].map((lang, index) => (
            <AnimeImage key={index} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimeImage = ({ lang }) => {
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
        <p className="w-full text-sm">Aview International {lang}</p>
        <p className="text-xs">{subscribers}k subscribers</p>
      </div>
    </div>
  );
};

const Voiceovers = () => {
  return (
    <div className="col-span-1 flex flex-col-reverse gap-s4 rounded-2xl bg-white-transparent p-s3 md:col-span-2 md:flex-row md:gap-s9">
      <div className="flex flex-1 flex-col items-start justify-center">
        <h4 className="mb-s2 text-xl font-semibold md:text-5xl">
          {AI_Tools[0].title}
        </h4>
        <p className="font-light">{AI_Tools[0].desc}</p>
      </div>

      <div className="flex-1">
        <Image src={AI_Tools[0].image} alt="" className="object-contain" />
      </div>
    </div>
  );
};

const TranslatedSubtitles = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  useEffect(() => {
    const cycleStates = () => {
      setToggle1(true);
      setTimeout(() => {
        setToggle2(true);
        setTimeout(() => {
          setToggle1(false);
          setToggle2(false);
        }, 10000);
      }, 3000);
    };

    cycleStates(); // start loop immediately
    const intervalId = setInterval(cycleStates, 16000); // loop entire animation cycle

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border-1 rounded-lg border border-white-transparent p-s3">
      <p className="mb-s3 text-3xl">Global Channel</p>
      <div className="border-1 mb-s4 flex items-center justify-between rounded-lg border border-white-transparent bg-white-transparent p-s2">
        <Image src={Logo} alt="" width={50} height={50} />
        <div className="ml-s4 flex-grow">
          <p className="text-lg">Aview International Eng...</p>
          <span
            className={`border-1 rounded-md border border-white-transparent bg-white-transparent p-1 text-sm ${
              toggle1 ? 'text-green' : 'text-gray-2'
            }`}
          >
            Expected Revenue: $
            {toggle1 ? <SmoothCounter endValue={5380} duration={12000} /> : 0}
          </span>
        </div>
        <ToggleButton isChecked={toggle1} handleChange={null} />
      </div>
      <div className="border-1 flex items-center justify-between rounded-lg border border-white-transparent bg-white-transparent p-s2">
        <Image src={Logo} alt="" width={50} height={50} />
        <div className="ml-s4 flex-grow">
          <p className="text-lg">Aview International Esp...</p>
          <span
            className={`border-1 rounded-md border border-white-transparent bg-white-transparent p-1 text-sm ${
              toggle2 ? 'text-green' : 'text-gray-2'
            }`}
          >
            Expected Revenue: $
            {toggle2 ? <SmoothCounter endValue={4250} duration={9500} /> : 0}
          </span>
        </div>
        <ToggleButton isChecked={toggle2} handleChange={null} />
      </div>
      <div className="mt-s3 max-w-[160px]">
        {toggle1 && toggle2 ? (
          <GlobalButton>Cash Out</GlobalButton>
        ) : (
          <GlobalButton disabled={true} extraClasses="px-s3">
            Cash Out
          </GlobalButton>
        )}
      </div>
    </div>
  );
};

const Tools = {
  1: <Modification />,
  2: <TranslatedSubtitles />,
  3: <Distribution />,
  4: <Audio />,
};
export default AiTools;
