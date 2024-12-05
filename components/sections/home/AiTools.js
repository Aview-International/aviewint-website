import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import Logo from '../../../public/img/aview/logo.svg';
import { useEffect, useRef, useState } from 'react';
import { SUPPORTED_REGIONS } from '../../../constants/constants';
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
        Let AI Supercharge Your Creative Process
      </h2>
      <p className="mb-s6 mt-s2 text-center font-extralight">
        Transform how you create, localize, and distribute content—all with the
        power of our AI toolkit
      </p>
      <div className="mt-s8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Voiceovers />
        {AI_Tools.slice(1).map((tool, i) => (
          <div key={i} className={'col-span-1 w-full md:max-w-[600px]'}>
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
  const [payload, setPayload] = useState([]);

  const handleSelect = (option) => {
    const selectedRegion = [...payload];

    if (selectedRegion.includes(option))
      selectedRegion.splice(selectedRegion.indexOf(option), 1);
    else selectedRegion.push(option);

    setPayload(selectedRegion);
  };

  return (
    <div className="border-1 grid grid-cols-2 items-center justify-center gap-3 rounded-xl border border-white-transparent p-s3">
      {SUPPORTED_REGIONS.map((item, index) => (
        <div
          key={index}
          className={`group flex flex-col items-center`}
          onClick={() => handleSelect(item.title)}
        >
          <div
            className={`relative h-full max-h-[180px] w-full max-w-[250px] cursor-pointer rounded-xl bg-black p-s1 text-center ${
              payload.includes(item.title) ? 'gradient-1' : 'gradient-dark'
            }`}
          >
            <Image src={item.image} alt={item.title} width={140} height={135} />
            <div
              className={`gradient-1 transition-300 absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 blur-[8px] group-hover:opacity-60`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
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
  const cycleStateRef = useRef(null);

  useEffect(() => {
    const cycleStates = () => {
      // clear any existing timeout
      if (cycleStateRef.current) {
        clearTimeout(cycleStateRef.current);
      }

      // first stage: enable first toggle
      setToggle1(true);

      // second stage: enable second toggle after 3 seconds
      cycleStateRef.current = setTimeout(() => {
        setToggle2(true);

        // third stage: reset toggles after 10 seconds
        cycleStateRef.current = setTimeout(() => {
          setToggle1(false);
          setToggle2(false);
        }, 10000);
      }, 3000);
    };

    // start cycle immediately
    cycleStates();

    // set up interval for looped cycles
    const intervalId = setInterval(cycleStates, 16000);

    return () => {
      clearInterval(intervalId);
      if (cycleStateRef.current) {
        clearTimeout(cycleStateRef.current);
      }
    };
  }, []);

  return (
    <div className="border-1 rounded-lg border border-white-transparent p-s3">
      <p className="mb-s3 text-3xl">Global Channels</p>
      <div className="border-1 mb-s5 flex items-center justify-between rounded-lg border border-white-transparent bg-white-transparent p-s2">
        <Image src={Logo} alt="Aview International" width={40} height={40} />
        <div className="ml-s2 flex-grow">
          <p className="text-sm md:text-base">Aview English</p>
          <span
            className={`border-1 rounded-md border border-white-transparent bg-white-transparent p-0.5 text-xs md:text-sm ${
              toggle1 ? 'text-green' : 'text-gray-2'
            }`}
          >
            Expected Revenue: $
            {toggle1 ? <SmoothCounter endValue={5380} duration={12000} /> : 0}
          </span>
        </div>
        <ToggleButton isChecked={toggle1} handleChange={null} />
      </div>
      <div className="border-1 mb-9 flex items-center justify-between rounded-lg border border-white-transparent bg-white-transparent p-s2">
        <Image src={Logo} alt="" width={40} height={40} />
        <div className="ml-s2 flex-grow">
          <p className="text-sm md:text-base">Aview Español</p>
          <span
            className={`border-1 rounded-md border border-white-transparent bg-white-transparent p-0.5 text-xs md:text-sm ${
              toggle2 ? 'text-green' : 'text-gray-2'
            }`}
          >
            Expected Revenue: $
            {toggle2 ? <SmoothCounter endValue={4250} duration={9500} /> : 0}
          </span>
        </div>
        <ToggleButton isChecked={toggle2} handleChange={null} />
      </div>
      <div className="max-w-[160px]">
        <GlobalButton disabled={!(toggle1 && toggle2)}>Continue</GlobalButton>
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
