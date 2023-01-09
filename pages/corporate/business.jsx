import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/blobs';
import businessTranslations from '../../public/img/graphics/corporate/business/business-services.png';
import BusinessTranslationOverview from '../../components/sections/corporate/business/BusinessTranslationOverview';
import BenefitsOfBusinessTranslation from '../../components/sections/corporate/business/BenefitsOfBusinessTranslation';
import AllBusinessSectors from '../../components/sections/corporate/business/AllBusinessSectors';
import PreppingForBillC96 from '../../components/sections/corporate/PreppingForBillC96';
import EasterEgg from '../../components/sections/reused/EasterEgg';

export default function Business() {
  return (
    <>
      <EasterEgg />
      <Header />
      <Hero
        title="Business Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Collaborate with certified professionals to translate documents for your business."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={businessTranslations}
        imageAlt="Business Translation Services"
      />
      <CompaniesWeWorkedWith />
      <BusinessTranslationOverview />
      <BenefitsOfBusinessTranslation />
      <LanguagesServed />
      <AllBusinessSectors />
      <PreppingForBillC96 />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ />
      <FeaturedBlogs />
      <Footer />
      <Blobs />
    </>
  );
}
