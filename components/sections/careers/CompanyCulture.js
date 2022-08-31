import GraphicCard from '../../UI/GraphicCardHorizontal';
import Image from 'next/image';
import ed2Focus from '../../../public/img/graphics/ed2.png';
import collaborativeWork from '../../../public/img/graphics/collabo.png';
import personalGrowth from '../../../public/img/graphics/personal.png';
import teambuilding from '../../../public/img/graphics/team-building.png';


const CARD_CONTENT = [
  {
    title: 'Teambuilding',
    graphic: teambuilding,
  },
  {
    title: 'Collaborative Work',
    graphic: collaborativeWork,
  },
  {
    title: 'Personal Growth',
    graphic: personalGrowth,
  },
  {
    title: 'EDII Focus',
    graphic: ed2Focus,
  },
];

const CompanyCulture = () => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s4 md:mb-s10">
        Benefits of{' '}
        <span className="gradient-text gradient-2">Translations</span>
      </h2>
      <CardGrid />
    </section>
  );
};

const CardGrid = () => {
  return (
    <div className="mx-auto grid max-w-[1030px] gap-x-s2.5 gap-y-s4 md:grid-cols-2">
      {CARD_CONTENT.map((list) => (
        <GraphicCard
          graphic={list.graphic}
          title={list.title}
          direction="horizontal"
        />
      ))}
    </div>
  );
  }
  
  export default CompanyCulture;