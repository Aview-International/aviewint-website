import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import YouCreateWeTranslate from '../components/sections/home/TranslateYourSocialMediaContent';
import OurServices from '../components/sections/reused/OurServices';
import ContentCreators from '../components/sections/home/ContentCreators';
import OurTranslatedContent from '../components/sections/home/TranslatedContent';
import ALeaderInTranslations from '../components/sections/home/YouCreateWeTranslate';
import BreadAndButter from '../components/sections/home/BreadAndButter';
import WhyWorkWithUs from '../components/sections/home/LeadInTranslations';
import GenerateAview from '../components/sections/home/GenerateAview';
import FAQ from '../components/sections/home/FAQs';
import GoGlobal from '../components/sections/home/GoGlobal';
import FeaturedBlogs from '../components/sections/reused/FeaturedBlogs';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Home" />
      <YouCreateWeTranslate />
      <OurServices />
      <ContentCreators />
      <OurTranslatedContent />
      <ALeaderInTranslations />
      <BreadAndButter />
      <WhyWorkWithUs />
      <GenerateAview />
      <FAQ />
      <GoGlobal />
      <FeaturedBlogs />
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;
