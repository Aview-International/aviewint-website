import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import ScientificTranslationOverview from '../../components/sections/corporate/scientific/ScientificTranslationOverview';
import BenefitsOfScientificTranslation from '../../components/sections/corporate/scientific/BenefitsOfScientificTranslation';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import ScientificBranchesWeWorkWith from '../../components/sections/corporate/scientific/ScientificBranchesWeWorkWith';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import scientificGraphic from '../../public/img/graphics/corporate/scientific.png';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import SEO from '../../components/SEO/SEO';

const ITEMS = [
  {
    title: 'We Value Accuracy',
    description:
      'What makes scientific translations unique? They require 100% accuracy. Our talented translators take pride in always producing high-quality transcriptions. At AVIEW we guarantee fast, accurate, and effective services.',
  },
  {
    title: 'Fast Turnaround Time',
    description:
      "It's not uncommon for scientific projects to be time sensitive. We take into account our client's time constraints and requirements by providing a swift translation and localization process.",
  },
  {
    title: 'Expert Translators',
    description:
      'Scientific translations require professionals that are comfortable with scientific jargon. A mistranslated term can be detrimental to a report or article. This is why AVIEW provides translators that specialize in your field.',
  },
];

export default function Scientific() {
  return (
    <>
      <SEO title="Scientific Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Scientific Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Work with certified professionals to translate scientific material."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={scientificGraphic}
      />
      <CompaniesWeWorkedWith />
      <ScientificTranslationOverview />
      <BenefitsOfScientificTranslation />
      <WhyUseAview items={ITEMS} />
      <ScientificBranchesWeWorkWith />
      <LanguagesServed />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
