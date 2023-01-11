import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import ScientificTranslationOverview from '../../components/sections/corporate/scientific/ScientificTranslationOverview';
import BenefitsOfScientificTranslation from '../../components/sections/corporate/scientific/BenefitsOfScientificTranslation';
import WhyUseAview from '../../components/sections/corporate/scientific/WhyUseAview';
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
      <WhyUseAview />
      <ScientificBranchesWeWorkWith />
      <LanguagesServed />
      <StartGenerating />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
