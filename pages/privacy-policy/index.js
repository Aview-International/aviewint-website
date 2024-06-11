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
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <Header curPage="Home" />
      <PrivacyData />
      <Blobs />
      <Footer curPage="Home" />
    </>
  );
};

export default PrivacyPolicy;
