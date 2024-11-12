import { Work_Process } from '../../../constants/constants';

const HowItWorks = () => {
  return (
    <section className="section m-horizontal text-white">
      <h2 className="mx-auto mb-s6 w-5/6 text-center text-5xl font-bold leading-none lg:w-3/4 lg:text-[48px]">
        How does Aview work?
      </h2>
      <div className="mt-s2 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
        {Work_Process.map((item, index) => {
          const isSecondColumn = index % 2 === 1;

          return (
            <div
              className={`flex flex-col ${
                isSecondColumn ? 'md:ml-auto md:w-5/6 lg:ml-0 lg:w-full' : ''
              }`}
              key={index}
            >
              <p className="gradient-text gradient-1 text-2xl font-semibold lg:text-3xl">
                0{index + 1}
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:mt-3 lg:mt-4 lg:text-2xl">
                {item.title}
              </p>
              <p className="mt-2 text-sm font-extralight">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
