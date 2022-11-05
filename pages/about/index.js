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
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';

const About = () => {
  return (
    <>
      <SEO
        title="About - AVIEW"
        description="Our mission is to expand your international fanbase. We are a professional online translation company. Visit today to gain AVIEW!"
      />
      <Header curPage="About" />
      <OurMission />
      <AboutAview />
      <AtAview />
      <OurCoreValues />
      <AviewsGrowth />
      <OurMilestones />
      <MeetTheTeam />
      <WhyName />
      <JoinTheTeam />
      <FeaturedBlogs />
      <Footer curPage="About" />
      <Blobs />
    </>
  );
};

export default About;
