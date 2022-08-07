import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Section1 from '../components/sections/home/Section1';
import Section2 from '../components/sections/home/Section2';
import Section4 from '../components/sections/home/Section4';

const Home = () => {
  return (
    <>
      <Header curPage="Home" />
      <Section1 />
      <Section2 />
      <Section4 />
      <Footer />
    </>
  );
};

export default Home;
