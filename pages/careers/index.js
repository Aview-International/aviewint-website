import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import FavoriteInfluencer from '../../components/sections/careers/FavoriteInfluencer';
import PerksAview from '../../components/sections/careers/PerksAview';
import MakeImpact from '../../components/sections/careers/MakeImpact';
import CompanyCulture from '../../components/sections/careers/CompanyCulture';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';

const Careers = () => {
  return (
    <>
      <SEO
        title="Careers - AVIEW"
        description="Our customized approach ensures that you get the best service for your brand. Find Your International Growth by visiting Aview!"
      />
      <Header curPage="Careers" />
      <FavoriteInfluencer />
      <PerksAview />
      <MakeImpact />
      <CompanyCulture />
      <Footer curPage="Careers" />
      <Blobs />
    </>
  );
};

export default Careers;
