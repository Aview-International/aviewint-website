import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import FAQ from '../../components/sections/home/FAQ';
import GenerateAviewForCompany from '../../components/sections/corporate/GenerateAviewForCompany';
import OurCorporateServices from '../../components/sections/corporate/OurCorporateServices';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import CorporateTranslations from '../../components/sections/corporate/CorporateTranslations';
import BenefitsOfTranslatingContent from '../../components/sections/corporate/BenefitsOfTranslatingContent';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import PreppingForBillC96 from '../../components/sections/corporate/PreppingForBillC96';
import HowItWorks from '../../components/sections/reused/HowItWorks';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Corporate = () => {
  return (
    <>
      <SEO
        title="Corporate - AVIEW"
        description="Organizations worldwide trust us to ensure they deliver their content in a language and format that meets their audience's needs. Contact Us Today!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Corporate" />
      <OurCorporateServices />
      <ScrollToTopButton />
      <CompaniesWeWorkedWith />
      <CorporateTranslations />
      <BenefitsOfTranslatingContent />
      <LanguagesServed />
      <PreppingForBillC96 />
      <HowItWorks />
      <GenerateAviewForCompany />
      <FAQ page="corporate" />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
};

export default Corporate;
