import GraphicCard from '../../UI/GraphicCardHorizontal';
import Image from 'next/image';
import ed2Focus from '../../../public/img/graphics/ed2.png';
import collaborativeWork from '../../../public/img/graphics/collabo.png';
import personalGrowth from '../../../public/img/graphics/personal.png';
import teambuilding from '../../../public/img/graphics/team-building.png';

const CARD_CONTENT = [
  {
    id: 'culture-1',
    title: 'Teambuilding',
    graphic: teambuilding,
  },
  {
    id: 'culture-2',
    title: 'Collaborative Work',
    graphic: collaborativeWork,
  },
  {
    id: 'culture-3',
    title: 'Personal Growth',
    graphic: personalGrowth,
  },
  {
    id: 'culture-4',
    title: 'EDII Focus',
    graphic: ed2Focus,
  },
];

const CompanyCulture = () => {
  return (
    <section className="section m-horizontal md:text-center">
      <h2 className="title mb-s4">
        <span className="gradient-text gradient-2">Company Culture</span>
      </h2>
      <CardGrid />
    </section>
  );
};

const CardGrid = () => {
  return (
    <div className="mx-auto grid max-w-[1030px] gap-x-s2.5 gap-y-s4 md:grid-cols-2">
      {CARD_CONTENT.map((list, i) => (
        <GraphicCard
          key={list.id}
          graphic={list.graphic}
          title={list.title}
          direction="horizontal"
        />
      ))}
    </div>
  );
};

export default CompanyCulture;
