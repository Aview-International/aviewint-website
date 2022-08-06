import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import Section1 from '../components/sections/home/Section1';

const Home = () => {
  return (
    <>
      <Header curPage="Home" />
      <Section1 />
      <Footer />
    </>
  );
};

export default Home;
