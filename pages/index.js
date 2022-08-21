import Header from '../components/navigation/Header';
import TranslateYourSocialMediaContent from '../components/sections/home/TranslateYourSocialMediaContent';
import ContentCreators from '../components/sections/home/ContentCreators';
import TranslatedContent from '../components/sections/home/TranslatedContent';
import BreadAndButter from '../components/sections/home/BreadAndButter';
import YouCreateWeTranslate from '../components/sections/home/YouCreateWeTranslate';
import LeadInTranslations from '../components/sections/home/LeadInTranslations';
import GoGlobal from '../components/sections/home/GoGlobal';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import FAQs from '../components/sections/home/FAQs';
import GenerateAview from '../components/sections/home/GenerateAview';
import SEO from '../components/SEO/SEO';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Home" />
      <TranslateYourSocialMediaContent />
      <ContentCreators />
      <TranslatedContent />
      <BreadAndButter />
      <YouCreateWeTranslate />
      <LeadInTranslations />
      <GenerateAview />
      <FAQs />
      <GoGlobal />
      <Footer />
      <Blobs />
    </>
  );
};

export default Home;
