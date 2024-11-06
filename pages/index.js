import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import UnlockGlobalGrowth from '../components/sections/home/UnlockGlobalGrowth';
import StartGenerating from '../components/sections/home/StartGenerating';
import FAQ from '../components/sections/home/FAQ';
// import GoGlobal from '../components/sections/home/GoGlobal';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import ScrollToTopButton from '../components/UI/ScrollToTopButton';
import ProgressBar from '../components/UI/ProgressBar';
import ScrollVerticalAnime from '../components/sections/home/ScrollVerticalAnime';
import CookieConsent from '../components/sections/home/CookieConsent';
import Features from '../components/sections/home/Features';
import HowItWorks from '../components/sections/home/HowItWorks';
import AiTools from '../components/sections/home/AiTools';
import CompareTools from '../components/sections/home/ComapreTools';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <CookieConsent />
      <ProgressBar />
      <Header curPage="Home" />
      <UnlockGlobalGrowth />
      <AiTools />
      <HowItWorks />
      <ScrollToTopButton />
      <ScrollVerticalAnime />
      <Features />
      <CompareTools />
      <StartGenerating formId="t5dW3MSY" />
      <FAQ page="landing" />
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;
