import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import HighQuality from '../../components/sections/corporate/translations/HighQuality';
import OurServices from '../../components/sections/corporate/translations/OurServices';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import HowItWorks from '../../components/sections/corporate/translations/HowItWorks';
import StartGenerating from '../../components/sections/home/StartGenerating';
import YouCreateWeTranslation from '../../components/sections/corporate/translations/YouCreateWeTranslate';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import englishTranslations from '../../public/img/graphics/corporate/translations/english.png';

const WHY_USE_AVIEW = [
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
];

export default function EnglishTranslations() {
  return (
    <>
      <SEO title="English Translations - AVIEW" />
      <Header curPage="Corporate" />
      <Hero
        title="English Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Collaborate with translators at AVIEW to receive English translation solutions."
        buttonText="Get Started Today"
        buttonLink="#generate-aview"
        image={englishTranslations}
        imageAlt="english translations"
      />
      <CompaniesWeWorkedWith />
      <HighQuality />
      <OurServices />
      <WhyUseAview items={WHY_USE_AVIEW} />
      <HowItWorks />
      <StartGenerating formId="JhSA3lfn" />
      <YouCreateWeTranslation />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
    </>
  );
}
