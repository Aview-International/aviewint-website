import React from 'react';
import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import LoganImage from '../../../public/img/graphics/new-landing-images/testimonial-1.webp';

export const LANGUAGES_MENU_FIRST = [
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

export const LANGUAGES_MENU_SECOND = [
  'Russian',
  'Bengali',
  'Portuguese',
  'Arabic',
  'Spanish',
  'Hindi',
  'French',
  'English',
  'Tagalog',
  'Dutch',
  'Telugu',
  'Marathi',
  'Japanese',
  'German',
  'Indonesian',
  'Urdu',
];

export const LANGUAGES_MENU_THIRD = [
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
    <section className="m-horizontal section  text-white">
      <h2 className="mx-auto text-center text-5xl font-bold leading-none lg:text-[60px]">
        AI Tools To Help You Succeed
      </h2>
      <p className="mb-s6 mt-s2 text-center font-extralight">
        Try our set of AI tools to see our capabilities
      </p>
      <div className="mt-s8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {AI_Tools.map((tool) => {
          return (
            <div
              key={tool.index}
              className={`${
                tool.index != 1 ? 'col-span-1 max-w-[600px]' : 'col-span-1 md:col-span-2'
              }`}
            >
              {tool.index == 1 ? (
                <FirstContainer
                  title={tool.title}
                  desc={tool.desc}
                  image={tool.image}
                />
              ) : (
                <ToolsContainer
                  title={tool.title}
                  desc={tool.desc}
                  image={tool.image}
                  index={tool.index}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ToolsContainer = ({ title, desc, image, index }) => {
  return (
    <div className="flex flex-col  w-full h-full justify-start gap-y-2 rounded-2xl bg-white-transparent py-s3">
      <div className="flex h-[260px] w-full items-center justify-center">
        <div className={`h-full relative w-full px-6`}>
          {index != 4 ? (
            <Image
              src={image}
              alt={title}
              // width={600}
              // height={260}
              layout='fill'
              className="w-4 h-4 object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex h-full w-full max-w-[95%] sm:max-w-[70%] md:max-w-[85%] lg:max-w-[80%] overflow-hidden rounded-xl border border-gray-800 bg-transparent">
                <div className="flex h-full flex-col justify-between">
                  <div className="relative my-2 h-[72px] w-full overflow-hidden">
                    <div className="animate-images-anime flex w-fit gap-x-4">
                      {[...Array(2)].map((_, setIndex) => (
                        <div
                          className="flex shrink-0 gap-4"
                          key={`set-${setIndex}`}
                        >
                          {LANGUAGES_MENU_FIRST.map((language, index) => (
                            <AnimeImage key={index} language={language} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative mb-2 h-[72px] w-full overflow-hidden">
                    <div className="animate-images-anime-first flex w-fit gap-x-4">
                      {[...Array(2)].map((_, setIndex) => (
                        <div
                          className="flex shrink-0 gap-4"
                          key={`set-${setIndex}`}
                        >
                          {LANGUAGES_MENU_SECOND.map((language, index) => (
                            <AnimeImage key={index} language={language} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-[72px] w-full overflow-hidden">
                    <div className="animate-images-anime-second flex w-fit gap-x-4">
                      {[...Array(2)].map((_, setIndex) => (
                        <div
                          className="flex shrink-0 gap-4"
                          key={`set-${setIndex}`}
                        >
                          {LANGUAGES_MENU_THIRD.map((language, index) => (
                            <AnimeImage key={index} language={language} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <h4 className="px-s3 text-xl font-semibold leading-none md:text-5xl">
        {title}
      </h4>
      <p className="px-s3 font-light">{desc}</p>
    </div>
  );
};

const AnimeImage = ({ language }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white-transparent px-3 py-2">
      <div className="flex h-10 w-10 items-center justify-center">
        <Image
          src={LoganImage}
          alt="anime-logan"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="w-full text-[10px] leading-none">
          Logan Paul <span className="">{language}</span>
        </p>
        <p className="text-[10px] leading-none">235k subscribers</p>
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
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AiTools;
