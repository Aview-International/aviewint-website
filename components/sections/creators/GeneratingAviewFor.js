import Image from 'next/image';
import { GENERATING_AVIEW_FOR } from '../../../constants/constants';
import Row4 from '../../layout/Row4';
import Profile from '../../UI/Profile';

const GeneratingAviewFor = () => {
  return (
    <section className="section m-horizontal text-center" data-aos="fade-up">
      <h2 className="title mb-s9 md:mb-s10">
        Generating <span className="gradient-text gradient-2">Aview</span> For
      </h2>
      <CreatorGrid />
    </section>
  );
};

const CreatorGrid = () => {
  return (
    <Row4>
      {GENERATING_AVIEW_FOR.map((creator) => (
        <Profile
          key={creator.id}
          name={creator.name}
          description={creator.subscribers}
          icon={creator.icon}
        />
      ))}
    </Row4>
  );
};

export default GeneratingAviewFor;
