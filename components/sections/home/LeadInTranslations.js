import { LEAD_IN_TRANSLATIONS } from '../../../constants/constants';
import Row3 from '../../layout/Row3';
import GlobalButton from '../../UI/GlobalButton';
import GraphicCard from '../../UI/GraphicCard';

const LeadInTranslations = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center md:mb-s10">
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
        <GlobalButton type="primary" purpose="route" route="#generate-aview">
          Get Started
        </GlobalButton>
      </div>
    </section>
  );
};

export default LeadInTranslations;
