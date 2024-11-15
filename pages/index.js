import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import UnlockGlobalGrowth from '../components/sections/home/UnlockGlobalGrowth';
import StartGenerating from '../components/sections/home/StartGenerating';
import FAQ from '../components/sections/home/FAQ';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import ScrollToTopButton from '../components/UI/ScrollToTopButton';
import ProgressBar from '../components/UI/ProgressBar';
import ScrollVerticalAnime from '../components/sections/home/ScrollVerticalAnime';
import CookieConsent from '../components/sections/home/CookieConsent';
import Features from '../components/sections/home/Features';
import HowItWorks from '../components/sections/home/HowItWorks';
import AiTools from '../components/sections/home/AiTools';
import CompareTools from '../components/sections/home/ComapreTools';
import BlogSection from '../components/sections/home/BlogsSection';
import { getBlogPreviews } from '../lib/notion';

export async function getStaticProps() {
  const blogs = await getBlogPreviews();

  let validData = blogs
    .filter((item) => !isNaN(new Date(item.date)))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(validData.slice(0, 3))),
    },
    revalidate: 1,
  };
}

const Home = ({ blogs }) => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <CookieConsent />
      <ProgressBar />
      <Header curPage="Home" />
      <UnlockGlobalGrowth />
      <AiTools />
      <HowItWorks />
      <ScrollToTopButton />
      <ScrollVerticalAnime />
      <Features />
      <CompareTools />
      <StartGenerating formId="t5dW3MSY" />
      <FAQ page="landing" />
      <BlogSection blogs={blogs} />
      <Footer curPage="Home" />
      <Blobs />
    </>
  );
};

export default Home;
