import { LEAD_IN_TRANSLATIONS } from '../../../constants/constants';
import Row3 from '../../layout/Row3';
import Button from '../../UI/Button';
import GraphicCard from '../../UI/GraphicCard';

const LeadInTranslations = () => {
  return (
    <section className="section m-horizontal" data-aos="zoom-in">
      <h2 className="title mb-s4 text-left text-center md:mb-s10">
        Why <span className="gradient-text gradient-2">Work With Us</span>
      </h2>
      <div className="mb-s4">
        <Row3>
          {LEAD_IN_TRANSLATIONS.map((card) => (
            <GraphicCard
              key={card.id}
              title={card.title}
              description={card.description}
              graphic={card.graphic}
              direction="vertical"
            />
          ))}
        </Row3>
      </div>
      <div className="hidden text-center md:block">
        <Button type="primary" purpose="route" route="#generate-aview">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default LeadInTranslations;
