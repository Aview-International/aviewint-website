import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import MarketingServices from '../../components/sections/corporate/marketing/MarketingServices';
import WhyUseAview from '../../components/sections/corporate/scientific/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import MarketingMaterials from '../../components/sections/corporate/marketing/MarketingMaterials';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/blobs';
import marketingServices from '../../public/img/graphics/corporate/marketing/marketing-services.png';

export default function Marketing() {
  return (
    <>
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
      <MarketingServices />
      <WhyUseAview />
      <LanguagesServed />
      <MarketingMaterials />
      <StartGenerating />
      <FAQ />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
}
