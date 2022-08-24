import { LEAD_IN_TRANSLATIONS } from '../../../constants/constants';
import Row3 from '../../layout/Row3';
import GraphicCard from '../../UI/GraphicCard';

const LeadInTranslations = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s2 md:text-center">
        Why We{' '}
        <span className="gradient-text gradient-2">Lead in Translations.</span>
      </h2>
      <p className="body mx-auto mb-s4 md:mb-s10 md:max-w-[755px]">
        AVIEW focuses on making our services 100% catered to our creators.
        Whether you need subtitles, dubbing, or shorts, AVIEW will help you
        along your journey.
      </p>
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
    </section>
  );
};

export default LeadInTranslations;
