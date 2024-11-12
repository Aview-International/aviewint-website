import React from 'react';
import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';

const AiTools = () => {
  return (
    <section className="m-horizontal section  text-white">
      <h2 className="mx-auto text-center text-5xl leading-none lg:text-[60px]">
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
                tool.index != 1 ? 'col-span-1' : 'col-span-1 md:col-span-2'
              }`}
            >
              {tool.index == 1 ? (
                <FirstContainer
                  title={tool.title}
                  desc={tool.desc}
                  button={tool.button_text}
                  image={tool.image}
                />
              ) : (
                <ToolsContainer
                  title={tool.title}
                  desc={tool.desc}
                  button={tool.button_text}
                  image={tool.image}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ToolsContainer = ({ title, desc, image }) => {
  return (
    <div className="flex flex-col justify-start gap-y-2 rounded-2xl bg-white-transparent py-s3">
      <div className="flex h-full w-full items-center justify-center">
        <div className="max-h-[260px] max-w-[440px]">
          <Image
            src={image}
            alt={title}
            width={480}
            height={260}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h4 className="text-xl font-semibold leading-none md:text-5xl px-s3">
        {title}
      </h4>
      <p className="font-light px-s3">{desc}</p>
    </div>
  );
};

const FirstContainer = ({ title, desc, image }) => {
  return (
    <div className="flex grid-cols-[2.5fr,2fr] flex-col-reverse rounded-2xl bg-white-transparent md:grid">
      <div className="flex w-11/12 flex-col items-start justify-center gap-y-3 px-s4">
        <h4 className="md:mt-4 text-xl font-semibold leading-none md:text-5xl lg:mt-0">
          {title}
        </h4>
        <p className="font-light pb-s3">{desc}</p>
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
