import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import OurMission from '../../components/sections/about/OurMission';
import AboutAview from '../../components/sections/about/AboutAview';
import AtAview from '../../components/sections/about/AtAview';
import Blobs from '../../components/UI/Blobs';
import OurCoreValues from '../../components/sections/about/OurCoreValues';
import AviewsGrowth from '../../components/sections/about/AviewGrowth';
import OurMilestones from '../../components/sections/reused/OurMilestones';
import MeetTheTeam from '../../components/sections/about/MeetTheTeam';
import WhyName from '../../components/sections/about/WhyName';
import JoinTheTeam from '../../components/sections/about/JoinTheTeam';
import SEO from '../../components/SEO/SEO';
import FAQ from '../../components/sections/home/FAQ';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';
import CookieConsent from '../../components/sections/home/CookieConsent';

const About = () => {
  return (
    <>
      <SEO
        title="About - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <CookieConsent />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="About" />
      <OurMission />
      <ScrollToTopButton />
      <AboutAview />
      <AtAview />
      <OurCoreValues />
      <AviewsGrowth />
      <OurMilestones />
      <MeetTheTeam />
      <WhyName />
      <JoinTheTeam />
      <FAQ page="landing" />
      <Footer curPage="About" />
      <Blobs />
    </>
  );
};

export default About;
