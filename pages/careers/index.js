import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import FavoriteInfluencer from '../../components/sections/careers/FavoriteInfluencer';
import PerksAview from '../../components/sections/careers/PerksAview';
import MakeImpact from '../../components/sections/careers/MakeImpact';
import CompanyCulture from '../../components/sections/careers/CompanyCulture';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import ApplyToday from '../../components/sections/careers/ApplyToday';
import Process from '../../components/sections/careers/Process';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Careers = () => {
  return (
    <>
      <SEO
        title="Careers - AVIEW"
        description="Translate Your Favorite Influencer Videos! Apply to gain experience and become a translator, dubber, or editor. Apply Now!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Careers" />
      <FavoriteInfluencer />
      <ScrollToTopButton />
      <PerksAview />
      <MakeImpact />
      <CompanyCulture />
      <Process />
      <ApplyToday />
      <FeaturedBlogs />
      <Footer curPage="Careers" />
      <Blobs />
    </>
  );
};

export default Careers;
