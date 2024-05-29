import SEO from '../../components/SEO/SEO';
import Blobs from '../../components/UI/Blobs';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import TermsOfServiceSection from '../../components/sections/tiktok-terms-of-service';

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms Of Service - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <Header curPage="Terms-of-service" />
      <TermsOfServiceSection />
      <Footer curPage="Terms-of-service" />
      <Blobs />
    </>
  );
};

export default TermsOfService;
