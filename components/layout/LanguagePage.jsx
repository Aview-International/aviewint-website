import SEO from '../SEO/SEO';
import EasterEgg from '../sections/reused/EasterEgg';
import Header from '../navigation/Header';
import Hero from './Hero';
import CompaniesWeWorkedWith from '../sections/corporate/CompaniesWeWorkedWith';
import HighQuality from '../sections/languages/HighQuality';
import OurServices from '../sections/languages/OurServices';
import translations from '../../public/img/graphics/languages/translations.png';
import WhyUseAview from '../sections/reused/WhyUseAview';
import HowItWorks from '../sections/languages/HowItWorks';
import StartGenerating from '../sections/home/StartGenerating';
import YouCreateWeTranslation from '../sections/languages/YouCreateWeTranslate';
import FAQ from '../sections/home/FAQ';
import FeaturedBlogs from '../sections/reused/FeaturedBlogs';
import Footer from '../navigation/Footer';

export default function LanguagePage({
  title,
  language,
  graphic1 = translations,
  graphic2,
}) {
  if (!title) {
    title = `High-Quality ${language} <span class='gradient-text gradient-2'>Translations</span>`;
  }

  return (
    <>
      <EasterEgg />
      <SEO title={`${language} Translations - AVIEW`} />
      <Header curPage="Languages" />
      <Hero
        title={`${language} Translation <span class='gradient-text gradient-2'>Services</span>`}
        description={`Collaborate with translators at AVIEW to receive ${language.toLowerCase()} translation solutions.`}
        buttonText="Get Started Today"
        buttonLink="#generate-aview"
        image={graphic1}
        imageAlt="translations"
      />
      <CompaniesWeWorkedWith />
      <HighQuality title={title} language={language} graphic={graphic2} />
      <OurServices language={language} />
      <WhyUseAview
        items={[
          {
            title: 'Fast Turnaround Time',
            description:
              "We understand that each project has unique time constraints. That's why we provide speedy English translation services.",
          },
          {
            title: 'Personalization',
            description:
              "We make sure you're goals are met. Our personalized approach allows us to cater to each of our clients. Through collaboration, we create a custom plan that's right for you.",
          },
          {
            title: 'Specialization',
            description:
              "Working on a project that requires technical translation? You're in luck because, at AVIEW, our team of translators specializes in working with all kinds of technical material.",
          },
        ]}
      />
      <HowItWorks />
      <StartGenerating formId="JhSA3lfn" />
      <YouCreateWeTranslation />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Languages" />
    </>
  );
}
