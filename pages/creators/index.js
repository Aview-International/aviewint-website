import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import BenefitsOfTranslations from '../../components/sections/creators/BenefitsOfTranslations';
import InternationalGrowth from '../../components/sections/creators/InternationalGrowth';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import ContentCreators from '../../components/sections/home/ContentCreators';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import OurCreators from '../../components/sections/creators/OurCreatorsServices';
import CreatorTranslations from '../../components/sections/creators/CreatorTranslations';
import HowItWorks from '../../components/sections/reused/HowItWorks';
import StartGenerating from '../../components/sections/home/StartGenerating';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Creators = () => {
  return (
    <>
      <SEO
        title="Creators - AVIEW"
        description="Our customized approach ensures that you get the best service for your brand. Find Your International Growth by visiting Aview!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Creators" />
      <OurCreators />
      <ScrollToTopButton />
      <HowItWorks />
      <ContentCreators />
      <CreatorTranslations />
      <LanguagesServed />
      <BenefitsOfTranslations />
      <InternationalGrowth />
      <StartGenerating formId="t5dW3MSY" />
      <FeaturedBlogs />
      <Footer curPage="Creators" />
      <Blobs />
    </>
  );
};

export default Creators;
