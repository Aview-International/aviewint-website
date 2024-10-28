import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import UnlockGlobalGrowth from '../components/sections/home/UnlockGlobalGrowth';
import ContentCreators from '../components/sections/home/ContentCreators';
import EmpowerGlobal from '../components/sections/home/EmpowerGlobal';
import MetricsAnime from '../components/sections/home/MetricsAnime';
import StartGenerating from '../components/sections/home/StartGenerating';
import FAQ from '../components/sections/home/FAQ';
// import GoGlobal from '../components/sections/home/GoGlobal';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import EasterEgg from '../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../components/UI/ScrollToTopButton';
import ProgressBar from '../components/UI/ProgressBar';
import ScrollVerticalAnime from '../components/sections/home/ScrollVerticalAnime';
import InternationalGrowth from '../components/sections/reused/InternationalGrowth';
import CookieConsent from '../components/sections/home/CookieConsent';
import Features from '../components/sections/home/Features';
import HowItWorks from '../components/sections/home/HowItWorks';
import AiTools from '../components/sections/home/AiTools';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <CookieConsent />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Home" />
      <UnlockGlobalGrowth />
      <HowItWorks />
      <EmpowerGlobal />
      <AiTools />
      <ScrollToTopButton />
      {/* <ContentCreators /> */}
      <ScrollVerticalAnime />
      <Features />
      {/* <MetricsAnime /> */}
      <FAQ page="landing" />
      {/* <InternationalGrowth /> */}
      <StartGenerating formId="t5dW3MSY" />
      {/* <GoGlobal /> */}
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;
