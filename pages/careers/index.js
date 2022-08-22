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
      <SEO title="Careers - AVIEW" />
      <Header curPage="Careers" />
      <FavoriteInfluencer />
      <PerksAview />
      <MakeImpact />
      <CompanyCulture />
      <Footer />
      <Blobs />
    </>
  );
};

export default Careers;
