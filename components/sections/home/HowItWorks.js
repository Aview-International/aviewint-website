import { Work_Process } from '../../../constants/constants';

const HowItWorks = () => {
  return (
    <section className="section m-horizontal text-white">
      <h2 className="mx-auto mb-s6 w-5/6 text-center text-5xl leading-none lg:w-3/4 lg:text-[60px]">
        How does Aview work?
      </h2>
      <div className="mt-s2 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
        {Work_Process.map((item, index) => {
          return (
            <div className="text-start" key={index}>
              <p className="gradient-text gradient-1 text-2xl font-semibold lg:text-4xl lg:font-bold">
                0{index + 1}
              </p>
              <p className="mt-2 text-xl font-semibold leading-none md:mt-3 lg:mt-4 lg:text-2xl">
                {item.title}
              </p>
              <p className="mt-2 w-5/6 text-start text-sm font-extralight lg:mt-4">
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
