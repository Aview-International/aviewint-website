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
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Terms-of-service" />
      <TermsOfServiceSection />
      <Footer curPage="Terms-of-service" />
      <Blobs />
    </>
  );
};

export default TermsOfService;
