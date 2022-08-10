import Image from 'next/image';
import { GENERATING_AVIEW_FOR } from '../../../constants/constants';
import Card from '../../UI/Card';

const GeneratingAviewFor = () => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s9 md:mb-s18">
        Generating <span className="gradient-text gradient-2">Aview</span> For
      </h2>
      <CreatorGrid />
    </section>
  );
};

const CreatorGrid = () => {
  return (
    <div className="grid gap-y-s9 2xs:grid-cols-2 2xs:gap-x-s1 md:gap-x-s2.5 lg:grid-cols-4 lg:gap-y-s14">
      {GENERATING_AVIEW_FOR.map((creator) => (
        <Card key={creator.id} borderRadius="md">
          <div className="pt-s9 pb-s3 md:pb-s7 md:pt-s13">
            <div className="absolute left-1/2 top-0 h-[75px] w-[75px] -translate-y-1/2 -translate-x-1/2 overflow-hidden rounded-full md:h-[125px] md:w-[125px]">
              <Image
                src={creator.icon}
                alt={creator.name}
                layout="responsive"
              />
            </div>
            <p className="mb-s1 text-xl font-bold text-white md:text-4xl">
              {creator.name}
            </p>
            <p className="text-white md:text-xl">{creator.subscribers}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GeneratingAviewFor;
