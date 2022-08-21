import Header from '../../components/navigation/Header';
import OurServices from '../../components/sections/reused/OurServices';
import Footer from '../../components/navigation/Footer';
import YouCreateWeTranslate from '../../components/sections/creators/YouCreateWeTranslate';
import BenefitsOfTranslations from '../../components/sections/creators/BenefitsOfTranslations';
import HowItWorks from '../../components/sections/creators/HowItWorks';
import AtAview from '../../components/sections/creators/AtAview';
import GeneratingAviewFor from '../../components/sections/creators/GeneratingAviewFor';
import InternationalGrowth from '../../components/sections/creators/InternationalGrowth';
import GrowthWithAview from '../../components/sections/creators/GrowthWithAview';
import GenerateAview from '../../components/sections/home/GenerateAview';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';

const Creators = () => {
  return (
    <>
      <SEO title="Creators - AVIEW" />
      <Header curPage="Creators" />
      <InternationalGrowth />
      <OurServices />
      <YouCreateWeTranslate />
      <BenefitsOfTranslations />
      <HowItWorks />
      <AtAview />
      <GeneratingAviewFor />
      <GrowthWithAview />
      <GenerateAview />
      <Footer />
      <Blobs />
    </>
  );
};

export default Creators;
