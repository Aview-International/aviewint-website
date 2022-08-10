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

const Home = () => {
  return (
    <>
      <Header curPage="Home" />
      <TranslateYourSocialMediaContent />
      <ContentCreators />
      <TranslatedContent />
      <BreadAndButter />
      <YouCreateWeTranslate />
      <LeadInTranslations />
      <GoGlobal />
      <Footer />
      <Blobs />
    </>
  );
};

export default Home;
