import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Landing from '../../components/sections/about/Landing';
import AboutAview from '../../components/sections/about/AboutAview';
import AtAview from '../../components/sections/about/AtAview';
import Blobs from '../../components/UI/Blobs';
import OurCoreValues from '../../components/sections/about/OurCoreValues';
import AviewsGrowth from '../../components/sections/about/AviewGrowth';
import OurMilestones from '../../components/sections/reused/OurMilestones';
import MeetTheTeam from '../../components/sections/about/MeetTheTeam';
import WhyName from '../../components/sections/about/WhyName';

const About = () => {
  return (
    <>
      <Header curPage="About" />
      <Landing />
      <AboutAview />
      <AtAview />
      <OurCoreValues />
      <AviewsGrowth />
      <OurMilestones />
      <MeetTheTeam />
      <WhyName />
      <Footer />
      <Blobs />
    </>
  );
};

export default About;