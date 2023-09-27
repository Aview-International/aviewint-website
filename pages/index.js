import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import UnlockGlobalGrowth from '../components/sections/home/UnlockGlobalGrowth';
import ContentCreators from '../components/sections/home/ContentCreators';
import EmpowerGlobal from '../components/sections/home/EmpowerGlobal';
import MetricsAnime from '../components/sections/home/MetricsAnime';
import StartGenerating from '../components/sections/home/StartGenerating';
import FAQ from '../components/sections/home/FAQ';
import GoGlobal from '../components/sections/home/GoGlobal';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import EasterEgg from '../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../components/UI/ScrollToTopButton';
import ProgressBar from '../components/UI/ProgressBar';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Home" />
      <UnlockGlobalGrowth />
      <ScrollToTopButton />
      <ContentCreators />
      <EmpowerGlobal />
      <MetricsAnime />
      <FAQ page="landing" />
      <StartGenerating formId="t5dW3MSY" />
      <GoGlobal />
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;

 
