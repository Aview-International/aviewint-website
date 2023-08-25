import { MOST_POPULAR_LANGUAGES } from '../../../constants/constants';
import { ALSO_AVAILABLE } from '../../../constants/constants';
import Card from '../../UI/Card';

const LanguagesServed = () => {
  return (
    <section className="section m-horizontal text-center" data-aos="fade-right">
      <h2 className="title mb-s2 text-left md:text-center">
        Languages <span className="gradient-text gradient-2">Served</span>
      </h2>
      <p className="body mb-s4 text-left md:mb-s10 md:text-center">
        Our team of certified translators provide services in over 15 languages.
        Don&apos;t see the one you need? The team is constantly growing with new
        languages being added to our library.
      </p>
      <p className="mb-s2 text-5xl font-bold text-white">Most Popular</p>
      <LanguagesGrid>
        {MOST_POPULAR_LANGUAGES.map((language) => (
          <LanguageCard key={language.id} text={language.language} />
        ))}
      </LanguagesGrid>
      <p className="mt-s4 mb-s2 text-5xl font-bold text-white md:mt-s8">
        Also Available
      </p>
      <LanguagesGrid>
        {ALSO_AVAILABLE.map((language) => (
          <LanguageCard key={language.id} text={language.language} />
        ))}
      </LanguagesGrid>
    </section>
  );
};

const LanguagesGrid = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-[250px] flex-wrap justify-center gap-y-s2 gap-x-s1 sm:max-w-[440px] md:max-w-[700px] lg:max-w-[850px] lg:gap-x-s2 lg:gap-y-s4">
      {children}
    </div>
  );
};

const LanguageCard = ({ text }) => {
  return (
    <div className="flex-[0_0_calc(50%-4px)] sm:flex-[0_0_calc(33%-4px)] md:flex-[0_0_calc(25%-10px)] lg:flex-[0_0_calc(20%-16px)]">
      <Card borderRadius="md">
        <div className="relative py-s1.5 text-center">
          <p className="body text-white">{text}</p>
        </div>
      </Card>
    </div>
  );
};

export default LanguagesServed;
