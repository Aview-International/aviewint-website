import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import FinancialTranslationOverview from '../../components/sections/corporate/financial/FinancialTranslationOverview';
import WhyUseAview from '../../components/sections/corporate/scientific/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import AllFinancialDocuments from '../../components/sections/corporate/financial/AllFinancialDocuments';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/blobs';
import financialTranslations from '../../public/img/graphics/corporate/financial/financial-translation-services.png';
import EasterEgg from '../../components/sections/reused/EasterEgg';

export default function Financial() {
  return (
    <>
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Financial Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Work with certified professionals to translate financial documents."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={financialTranslations}
        imageAlt="Financial Translation Services"
      />
      <CompaniesWeWorkedWith />
      <FinancialTranslationOverview />
      <WhyUseAview />
      <LanguagesServed />
      <AllFinancialDocuments />
      <StartGenerating />
      <FAQ />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
