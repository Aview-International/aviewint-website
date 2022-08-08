import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Section1 from '../../components/sections/about/Section1';
import Section2 from '../../components/sections/about/Section2';
import Section3 from '../../components/sections/about/Section3';

const About = () => {
  return (
    <>
      <Header curPage="About" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default About;
