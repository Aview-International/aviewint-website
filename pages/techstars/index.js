import SEO from '../../components/SEO/SEO';
import Blobs from '../../components/UI/Blobs';
import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Typeform from '../../components/sections/techstars/typeform';

const Techstars = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Home" />
      <Typeform />
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Techstars;
