import SEO from '../../components/SEO/SEO';
import GoGlobal from '../../components/sections/home/GoGlobal';
import Footer from '../../components/navigation/Footer';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import Header from '../../components/navigation/Header';
import AiToolsPage  from '../../components/sections/ai-tools/AiToolsPage';

const AI_Tools = () => {
  return (
    <>
      <SEO
        title="AI-Tools - AVIEW"
        description="Translate Your Favorite Influencer Videos! Apply to gain experience and become a translator, dubber, or editor. Apply Now!"
      />
      <EasterEgg />
      <Header />
      <AiToolsPage />
      <GoGlobal />
      <Footer curPage="AI-Tools" />
    </>
  );
};

export default AI_Tools;
