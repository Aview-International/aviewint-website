import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import LearningServices from '../../components/sections/corporate/e-learning/LearningServices';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import Workflow from '../../components/sections/reused/Workflow';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import eLearning from '../../public/img/graphics/corporate/e-learning/e-learning.png';
import workflowSm from '../../public/img/graphics/corporate/e-learning/workflow-sm.svg';
import workflowLg from '../../public/img/graphics/corporate/e-learning/workflow-lg.svg';

const ITEMS = [
  {
    title: 'Expertise in Education',
    description:
      'We understand that eLearning translations require a special touch. Material such as data must be translated with precision while videos must be engaging. At AVIEW, we specialize in creating educational content that is both accurate and easy to understand. Our certified translators have expertise working with eLearning content.',
  },
  {
    title: 'Collaboration',
    description:
      'Different projects require different solutions. We work closely with each of our clients to prepare the best service for you. Each of our partners receives a personalized package crafted to help you reach your goals.',
  },
  {
    title: 'Beyond Translation',
    description:
      'While accurate translations are important, at AVIEW we also value localization. We take into account cultural differences, nuances, context, and much more to create an amazing experience for your audience.',
  },
];

export default function ELearning() {
  return (
    <>
      <SEO title="eLearning Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="eLearning Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Bring education to everyone through translation."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={eLearning}
        imageAlt="eLearning Translation Services"
      />
      <CompaniesWeWorkedWith />
      <LearningServices />
      <WhyUseAview items={ITEMS} />
      <LanguagesServed />
      <Workflow
        title="eLearning Localization <span class='gradient-text gradient-2'>Workflow</span>"
        workflowSm={workflowSm}
        workflowLg={workflowLg}
      />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="corporate" />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
    </>
  );
}
