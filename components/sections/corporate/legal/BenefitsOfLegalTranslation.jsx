import Row3 from '../../../layout/Row3';
import GraphicCard from '../../../UI/GraphicCard';
import internationalGrowth from '../../../../public/img/graphics/corporate/legal/international-growth.png';
import legalCompliance from '../../../../public/img/graphics/corporate/legal/legal-compliance.png';
import travelAndImmigration from '../../../../public/img/graphics/corporate/legal/travel-and-immigration.png';
import GlobalButton from '../../../UI/GlobalButton';

const ITEMS = [
  {
    title: 'International Growth',
    description:
      'A global business strategy requires collaboration between international departments and offices. Legal translations are a necessary step to making this happen.',
    image: internationalGrowth,
  },
  {
    title: 'Legal Compliance',
    description:
      "If you're running an international organization, you'll inevitably run into legal complications. By working with certified legal translators, you can ensure you are complying with the law.",
    image: legalCompliance,
  },
  {
    title: 'Travel & Immigration',
    description:
      "Whether you're an international student, a tourist, or someone looking to immigrate to another country, legal translations make your goals possible.",
    image: travelAndImmigration,
  },
];

export default function BenefitsOfLegalTranslation() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:mb-20 md:text-center">
        <span className="gradient-text gradient-2">Benefits</span> of Legal
        Translation
      </h2>
      <Row3>
        {ITEMS.map((item) => (
          <GraphicCard
            title={item.title}
            description={item.description}
            graphic={item.image}
            direction="vertical"
            key={item.title}
          />
        ))}
      </Row3>
      <div className="mt-10 text-center">
        <GlobalButton type="primary" purpose="route" route="#generate-aview">
          Get Started
        </GlobalButton>
      </div>
    </section>
  );
}
