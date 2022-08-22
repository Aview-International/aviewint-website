import Image from 'next/image';
import aboutGraphic from '../../../public/img/graphics/perks.png';

const PERKS = [
  {
    number: '01',
    title: 'Flexible Hours',
    description:
      'At Aview, you have the flexibility to work the hours that fit your schedule. An average translator will spend ~10 hours per week translating new content.',
  },
  {
    number: '02',
    title: 'Work With Internet Super Stars',
    description:
      "You will get the unique opportunity to work closely with some of the largest influencers in the world! Watch content even before it's released to the public.",
  },
  {
    number: '03',
    title: 'Great Compensation',
    description:
      'Aview offers some of the best compensation and bonus plans to our employees. Earn competitive rates based on the work and services completed.',
  },
];

const PerksAview = () => {
  return (
    <section className="section m-horizontal mt-s6 lg:mt-s17">
      <div className="grid items-center lg:grid-cols-4">
        <div className="col-span-2">
          <h1 className="title mb-s4">
            <span className="gradient-text gradient-2">
              Perks of Being with Aview
            </span>
          </h1>
          {PERKS.map((list, i) => (
            <div className="list" key={`list-${i}`}>
              <div className="flex">
                <h1 className="title mr-s2 lg:mt-s3 lg:min-w-[140px] lg:text-[100px]">
                  <span className="gradient-text gradient-2">
                    {list.number}
                  </span>
                </h1>
                <div className="list-info">
                  <h3 className={`title mb-s1 text-2xl`}>{list.title}</h3>
                  <p className={`body mb-s4`}>{list.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2 mx-auto mt-s4 lg:col-span-2 lg:my-auto lg:max-w-[550px]">
          <Image src={aboutGraphic} alt="about-graphic" />
        </div>
      </div>
    </section>
  );
};

export default PerksAview;
