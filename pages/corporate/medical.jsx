import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import MedicalTranslations from '../../components/sections/corporate/medical/MedicalTranslations';
import WhyUseAview from '../../components/sections/reused/WhyUseAview';
import LanguagesServed from '../../components/sections/reused/LanguagesServed';
import MedicalFields from '../../components/sections/corporate/medical/MedicalFields';
import Workflow from '../../components/sections/reused/Workflow';
import StartGenerating from '../../components/sections/home/StartGenerating';
import FAQ from '../../components/sections/home/FAQ';
import Footer from '../../components/navigation/Footer';
import medical from '../../public/img/graphics/corporate/medical/medical.png';
import workflowSm from '../../public/img/graphics/corporate/medical/workflow-sm.svg';
import workflowLg from '../../public/img/graphics/corporate/medical/workflow-lg.svg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import Blobs from '../../components/UI/Blobs';

const ITEMS = [
  {
    title: 'Expertise',
    description:
      'Medical translations require a specific skill set. Translators must be comfortable working with technical material that requires a high level of accuracy. Our certified translators specialize in working with medical jargon.',
  },
  {
    title: 'Confidentiality',
    description:
      "We understand and respect the sensitivity of medical information. That's why at AVIEW, we keep all the information in transcriptions private. If you would like us to sign an NDA we will gladly do so.",
  },
  {
    title: 'Accuracy',
    description:
      "Any mistakes in medical translations are problematic. That's why we specialize in translating all technical material with 100% accuracy. Our expert translators collaborate closely with each of our clients to ensure all the material is up to their standards.",
  },
];

export default function Medical() {
  return (
    <>
      <SEO title="Medical Services - AVIEW" />
      <EasterEgg />
      <Header curPage="Corporate" />
      <Hero
        title="Medical Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Bring education to everyone through translation."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={medical}
        imageAlt="Medical Translation Services"
      />
      <CompaniesWeWorkedWith />
      <MedicalTranslations />
      <WhyUseAview items={ITEMS} />
      <LanguagesServed />
      <ScrollToTopButton />
      <MedicalFields />
      <Workflow
        title="Medical Localization <span class='gradient-text gradient-2'>Workflow</span>"
        workflowSm={workflowSm}
        workflowLg={workflowLg}
      />
      <StartGenerating formId="JhSA3lfn" />
      <FAQ page="landing" />
      <Footer curPage="Medical Documents" />
      <Blobs />
    </>
  );
}
