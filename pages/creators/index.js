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
import GoGlobal from '../../components/sections/creators/GoGlobal';

const Creators = () => {
  return (
    <>
        <SEO
          title="Creators - AVIEW"
          description="Our customized approach ensures that you get the best service for your brand. Find Your International Growth by visiting Aview!"
        />
        <Header curPage="Creators" />
        <GoGlobal />
        <OurServices />
        <YouCreateWeTranslate />
        <BenefitsOfTranslations />
        <HowItWorks />
        <AtAview />
        <GeneratingAviewFor />
        <InternationalGrowth />
        <Footer curPage="Creators" />
        <Blobs />
    </>
  );
};

export default Creators;
