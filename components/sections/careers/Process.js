import { CAREER_PROCESS } from '../../../constants/constants';
import Border from '../../UI/Border';

const Process = () => {
  return (
    <section className="section m-horizontal" data-aos="zoom-in-down">
      <h2 className="title text-center">
        <span className="gradient-text gradient-2">Our Simple Process</span>
      </h2>
      <p className="pt-s2 pb-s4 text-center text-xl text-white">
        Process for our translators, dubbers and editors made simple and
        effective
      </p>
      <div
        className={`mx-auto grid max-w-[1050px] grid-cols-1 gap-s6 xl:grid-cols-2`}
      >
        {CAREER_PROCESS.map((process, i) => (
          <Card key={i} {...process} />
        ))}
      </div>
    </section>
  );
};

export default Process;

const Card = ({ department, steps }) => {
  return (
    <div className="mx-auto w-full last:m-auto md:w-[500px] xl:last:col-start-1 xl:last:col-end-3 last:xl:w-1/2">
      <Border borderRadius="[15px]">
        <div className={`w-full rounded-[15px] bg-black p-s4`}>
          <h3 className="pb-s1.5 text-center text-xl font-semibold md:text-6xl">
            <span className="gradient-text gradient-2">{department}</span>
          </h3>
          <div className={`relative flex`}>
            <div
              className={`absolute top-0 -left-[5px] flex h-[88%] flex-col items-center`}
            >
              <div className="h-5 w-5 rounded-full bg-blue"></div>
              <span className="gradient-1 inline-block h-[40%] w-[2px]"></span>
              <div className="h-5 w-5 rounded-full bg-blue"></div>
              <span className="gradient-1 inline-block h-[40%] w-[2px]"></span>
              <div className="h-5 w-5 rounded-full bg-blue"></div>
            </div>
            <ul className={`list-none pl-6 text-white`}>
              {steps.map((step, i) => (
                <li key={`step-${i}`}>
                  <small className="text-lg text-gray-2 md:text-xl ">
                    {step.step}
                  </small>
                  <h4 className="my-s1.5 text-xl font-medium md:text-4xl">
                    {step.title}
                  </h4>
                  <p className="pb-s3 text-base md:text-xl">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Border>
    </div>
  );
};
