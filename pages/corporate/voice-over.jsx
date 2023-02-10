import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import ProfessionalVoiceOvers from '../../components/sections/corporate/voice-overs/ProfessionalVoiceOvers';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import Workflow from '../../components/sections/reused/Workflow';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import Footer from '../../components/navigation/Footer';
import voiceOver from '../../public/img/graphics/corporate/voice-over/voice-over.png';
import workflowSm from '../../public/img/graphics/corporate/voice-over/workflow-sm.svg';
import workflowLg from '../../public/img/graphics/corporate/voice-over/workflow-lg.svg';

const ITEMS = [
  {
    title: 'Personalization',
    description:
      "We value your goals. That's why we collaborate with each of our clients to provide them with a custom package that works best for them. Simply book a meeting to go over the services you need and get an instant quote.",
  },
  {
    title: 'Authentic and Quality',
    description:
      'Our voice-over services are 100% manual. This is because we take great care to create content that appeals to everyone. Producing crisp and authentic audio for your audience is our goal.',
  },
  {
    title: 'Fast Turnaround Time',
    description:
      'While accurate translations are important, at AVIEW we also value localization. We take into account cultural differences, nuances, context, and much more to create an amazing experience for your audience.',
  },
];

export default function VoiceOver() {
  return (
    <>
      <SEO title="Voice Over Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Voice Over <span class='gradient-text gradient-2'>Services</span>"
        description="Receive fast and authentic voiceovers with crystal-clear audio."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={voiceOver}
        imageAlt="Voice Over Translation Services"
      />
      <ProfessionalVoiceOvers />
      <WhyUseAview items={ITEMS} />
      <LanguagesServed />
      <CompaniesWeWorkedWith />
      <Workflow
        title="Languages <span class='gradient-text gradient-2'>Workflow</span>"
        workflowSm={workflowSm}
        workflowLg={workflowLg}
      />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="voiceover" />
      <FeaturedBlogs />
      <Footer curPage="Corporate" />
    </>
  );
}
