import Row3 from '../../../layout/Row3';
import GraphicCard from '../../../UI/GraphicCard';
import expandAudiences from '../../../../public/img/graphics/corporate/scientific/expand-audiences.png';
import educateMorePeople from '../../../../public/img/graphics/corporate/scientific/educate-more-people.png';
import boostCollaboration from '../../../../public/img/graphics/corporate/scientific/boost-collaboration.png';

const ITEMS = [
  {
    title: 'Expand Audiences',
    description:
      'Chances are many people around the world would be interested in your work. By translating scientific material, you can multiply your audience.',
    graphic: expandAudiences,
  },
  {
    title: 'Educate More People',
    description:
      'Everyone deserves to learn. Providing education to people around the world is our goal at AVIEW.',
    graphic: educateMorePeople,
  },
  {
    title: 'Boost Collaboration',
    description:
      'The first step to international collaboration is communication. Translating scientific material creates an opportunity to work alongside institutions from different countries.',
    graphic: boostCollaboration,
  },
];

export default function BenefitsOfScientificTranslation() {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s2">
        <span className="gradient-2 gradient-text">Benefits</span> of Scientific
        Translation
      </h2>
      <p className="mb-s3 text-xl text-white md:mb-s10">
        We tailor our approach to fit your growth goals.
      </p>
      <Row3>
        {ITEMS.map((item) => (
          <GraphicCard
            key={item.title}
            title={item.title}
            description={item.description}
            graphic={item.graphic}
            direction="vertical"
          />
        ))}
      </Row3>
    </section>
  );
}
