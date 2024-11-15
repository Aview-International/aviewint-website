import { Work_Process } from '../../../constants/constants';

const HowItWorks = () => {
  return (
    <section className="section m-horizontal text-white">
      <h2 className="mb-s4 text-center text-5xl font-bold lg:text-7xl">
        How does Aview work?
      </h2>
      <div className="grid w-full grid-cols-1 justify-between gap-3 md:grid-cols-2 lg:grid-cols-4">
        {Work_Process.map((item, idx) => (
          <div className="my-s2" key={idx}>
            <p className="gradient-text gradient-1 text-2xl font-semibold lg:text-3xl">
              0{idx + 1}
            </p>
            <p className="my-2 text-xl font-semibold md:mt-3 lg:mt-4 lg:text-2xl">
              {item.title}
            </p>
            <p className="font-extralight">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
