import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';
import PricePage from '../../components/sections/pricing/PricePage';
import GoGlobal from '../../components/sections/home/GoGlobal';
import FAQ from '../../components/sections/home/FAQ';

const Pricing = () => {
  return (
    <>
      <SEO
        title="Careers - AVIEW"
        description="Translate Your Favorite Influencer Videos! Apply to gain experience and become a translator, dubber, or editor. Apply Now!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Pricing" />
      <PricePage />
      <ScrollToTopButton />
      <FAQ page="landing" />
      <GoGlobal />
      <Footer curPage="Pricing" />
      <Blobs />
    </>
  );
};

export default Pricing;
