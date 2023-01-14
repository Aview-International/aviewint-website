import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import FinancialTranslationOverview from '../../components/sections/corporate/financial/FinancialTranslationOverview';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import AllFinancialDocuments from '../../components/sections/corporate/financial/AllFinancialDocuments';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import financialTranslations from '../../public/img/graphics/corporate/financial/financial-translation-services.png';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import SEO from '../../components/SEO/SEO';

const ITEMS = [
  {
    title: 'Fast Turnaround Time',
    description:
      'At AVIEW, we understand that you have time restraints and requirements. We take this into account and prioritize your needs. Contact us today to get a quote!',
  },
  {
    title: 'Accurate Translations',
    description:
      'Financial documents can be sensitive. This is why at AVIEW, we take great care to ensure that your material is translated with the highest accuracy. Our certified translators guarantee high-quality transcriptions.',
  },
  {
    title: 'Specialized Experts',
    description:
      'When dealing with financial records, there is a lot of technical jargon. Translators must have a background in finance or a related field. Our translators at AVIEW, are certified and specialize in working with these types of documents.',
  },
];

export default function Financial() {
  return (
    <>
      <SEO title="Financial Services - AVIEW" />
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
      <WhyUseAview items={ITEMS} />
      <LanguagesServed />
      <AllFinancialDocuments />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
