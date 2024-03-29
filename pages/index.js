import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import UnlockGlobalGrowth from '../components/sections/home/UnlockGlobalGrowth';
import ContentCreators from '../components/sections/home/ContentCreators';
import EmpowerGlobal from '../components/sections/home/EmpowerGlobal';
import MetricsAnime from '../components/sections/home/MetricsAnime';
import StartGenerating from '../components/sections/home/StartGenerating';
import FAQ from '../components/sections/home/FAQ';
// import GoGlobal from '../components/sections/home/GoGlobal';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import EasterEgg from '../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../components/UI/ScrollToTopButton';
import ProgressBar from '../components/UI/ProgressBar';
import ScrollVerticalAnime from '../components/sections/home/ScrollVerticalAnime';
import InternationalGrowth from '../components/sections/reused/InternationalGrowth';
import { parseCookies } from 'nookies';
import { checkTokenExpiry } from '../utils/jwtExpiry';
import { setAuthState } from '../store/reducers/user.reducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuthState(data.isLoggedIn));
  }, []);

  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Home" />
      <UnlockGlobalGrowth />
      <ScrollToTopButton />
      <ContentCreators />
      <ScrollVerticalAnime />
      <EmpowerGlobal />
      <MetricsAnime />
      <FAQ page="landing" />
      <InternationalGrowth />
      <StartGenerating formId="t5dW3MSY" />
      {/* <GoGlobal /> */}
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);
  const sessionCookie = cookies.session;
  const data = {
    isLoggedIn: checkTokenExpiry(sessionCookie) ? true : false,
  };

  return {
    props: { data }, // This data can now be used in the HomePage component
  };
}
