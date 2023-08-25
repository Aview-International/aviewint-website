import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import ResumeTranslations from '../../components/sections/corporate/resume/ResumeTranslations';
import WhyAview from '../../components/sections/corporate/resume/WhyAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import resume from '../../public/img/graphics/corporate/resume/resume.png';

export default function Resume() {
  return (
    <>
      <SEO title="Resume Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Resume Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Find your dream job. Get your resume translated by certified professionals."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={resume}
        imageAlt="Resume Translation Services"
      />
      <CompaniesWeWorkedWith />
      <ResumeTranslations />
      <WhyAview />
      <LanguagesServed />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Corporate"/>
    </>
  );
}
