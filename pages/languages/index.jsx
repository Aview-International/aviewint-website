import Hero from '../../components/layout/Hero';
import Header from '../../components/navigation/Header';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import SEO from '../../components/SEO/SEO';
import AvailableLanguages from '../../components/sections/languages/AvailableLanguages';
import StartGenerating from '../../components/sections/home/StartGenerating';
import languages from '../../public/img/graphics/languages/languages.png';
import YouCreateWeTranslation from '../../components/sections/languages/YouCreateWeTranslate';
import Footer from '../../components/navigation/Footer';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';

export default function Languages() {
  return (
    <>
      <EasterEgg />
      <SEO title="Languages - AVIEW" />
      <Header curPage="Languages" />
      <Hero
        title="Fast and Accurate Manual Tranlsations in 15+ <span class='gradient-text gradient-2'>Languages</span>"
        description="Collaborate with experienced professionals to get your material translated, implemented, and distributed. We offer language solutions for all industries and use cases. Not only do we provide translations, but we also help you post and promote your content. Our personalized approach allows us to tackle any project regardless of size and scope. Don't see the language you're looking for? Our library is constantly expanding, and we're happy to accommodate special requests."
        buttonText="Get A Quote Today"
        buttonLink="#generate-aview"
        image={languages}
        imageAlt="languages"
      />
      <ScrollToTopButton />
      <AvailableLanguages />
      <StartGenerating formId="JhSA3lfn" />
      <YouCreateWeTranslation />
      <Footer />
    </>
  );
}
