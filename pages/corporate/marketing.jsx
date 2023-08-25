import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import MarketingServices from '../../components/sections/corporate/marketing/MarketingServices';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import MarketingMaterials from '../../components/sections/corporate/marketing/MarketingMaterials';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import marketingServices from '../../public/img/graphics/corporate/marketing/marketing-services.png';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import SEO from '../../components/SEO/SEO';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';

const ITEMS = [
  {
    title: 'Fast Turnaround',
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

export default function Marketing() {
  return (
    <>
      <SEO title="Marketing Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Marketing Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Reach a global audience through marketing translations."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={marketingServices}
        imageAlt="Marketing Translation Services"
      />
      <CompaniesWeWorkedWith />
      <ScrollToTopButton />
      <MarketingServices />
      <WhyUseAview items={ITEMS} />
      <LanguagesServed />
      <MarketingMaterials />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
