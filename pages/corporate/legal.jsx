import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import legalTranslations from '../../public/img/graphics/corporate/legal/legal-services.png';
import LegalTranslationOverview from '../../components/sections/corporate/legal/LegalTranslationOverview';
import BenefitsOfLegalTranslation from '../../components/sections/corporate/legal/BenefitsOfLegalTranslation';
import LegalBranches from '../../components/sections/corporate/legal/LegalBranches';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import SEO from '../../components/SEO/SEO';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';

export default function Legal() {
  return (
    <>
      <SEO title="Legal Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Legal Translation <span class='gradient-text gradient-2 block mb-s2'>Services</span>"
        description="Get fast and accurate legal translations with AVIEW."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={legalTranslations}
        imageAlt="Legal Translation Services"
      />
      <CompaniesWeWorkedWith />
      <ScrollToTopButton />
      <LegalTranslationOverview />
      <BenefitsOfLegalTranslation />
      <LanguagesServed />
      <LegalBranches />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="landing" />
      <Footer curPage="Legal Documents" />
      <Blobs />
    </>
  );
}
