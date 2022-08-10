import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Landing from '../../components/sections/about/Landing';
import AboutAview from '../../components/sections/about/AboutAview';
import AtAview from '../../components/sections/about/AtAview';

const About = () => {
  return (
    <>
      <Header curPage="About" />
      <Landing />
      <AboutAview />
      <AtAview />
      <Footer />
    </>
  );
};

export default About;
