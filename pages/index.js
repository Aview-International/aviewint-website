import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Section1 from '../components/sections/home/Section1';
import Section2 from '../components/sections/home/Section2';
import Section3 from '../components/sections/home/Section3';
import Section4 from '../components/sections/home/Section4';
import Section5 from '../components/sections/home/Section5';
import Section6 from '../components/sections/home/Section6';

const Home = () => {
  return (
    <>
      <Header curPage="Home" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
};

export default Home;
