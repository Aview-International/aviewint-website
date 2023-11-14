import SEO from '../../components/SEO/SEO';
import PrivacyData from '../../components/sections/privacy-policy/policy';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import Footer from '../../components/navigation/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Aview International"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Home" />
      <PrivacyData />
      <Blobs />
      <Footer curPage="Home" />
    </>
  );
};

export default PrivacyPolicy;
