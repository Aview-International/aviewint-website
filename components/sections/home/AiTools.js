import Image from 'next/image';
import { AI_Tools } from '../../../constants/constants';
import OnboardingButton from '../../Onboarding/button';
import Button from '../../UI/Button';

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

const ToolsContainer = ({ title, desc, button, image }) => {
  return (
    <div
      className={`flex flex-col justify-start gap-y-3 rounded-2xl bg-white-transparent p-s3 md:gap-y-4 md:p-s6`}
    >
      <Image src={image} alt={title} width={300} height={240} />
      <h4 className="text-xl leading-none md:text-7xl">{title}</h4>
      <p className="font-extralight">{desc}</p>
      <Button type="secondary" purpose="onClick">
        {button}
      </Button>
    </div>
  );
};

const FirstContainer = ({ title, desc, button, image }) => {
  return (
    <div className="flex grid-cols-2 flex-col-reverse rounded-2xl bg-white-transparent p-s3 md:grid md:p-s12">
      <div className="flex w-5/6 flex-col items-start justify-center gap-y-3 md:w-2/3 md:gap-y-4">
        <h4 className="text-xl leading-none md:text-7xl">{title}</h4>
        <p className="font-extralight">{desc}</p>
        <Button type="secondary" purpose="onClick">
          {button}
        </Button>
      </div>
      <div className="">
        <Image src={image} alt={title} width={540} height={300} />
      </div>
    </div>
  );
};

export default AiTools;
