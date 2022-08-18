import { BENEFITS_OF_TRANSLATIONS } from '../../../constants/constants';
import GraphicCard from '../../UI/GraphicCard';

const BenefitsOfTranslations = () => {
  return (
    <section className="section m-horizontal md:text-center">
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
      {BENEFITS_OF_TRANSLATIONS.map((benefit) => (
        <GraphicCard
          key={benefit.id}
          title={benefit.title}
          description={benefit.description}
          graphic={benefit.graphic}
          direction="horizontal"
        />
      ))}
    </div>
  );
};

export default BenefitsOfTranslations;
