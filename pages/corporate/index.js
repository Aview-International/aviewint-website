import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import GrowingInternationally from '../../components/sections/corporate/GrowingInternationally';
import OurServices from '../../components/sections/reused/OurServices';
import OurMilestones from '../../components/sections/reused/OurMilestones';
import Testimonials from '../../components/sections/corporate/Testimonials';
import WhyChooseUs from '../../components/sections/corporate/WhyChooseUs';
import Blobs from '../../components/UI/Blobs';
import BrandGlobal from '../../components/sections/corporate/BrandGlobal';
import OurMission from '../../components/sections/corporate/OurMission';
import SEO from '../../components/SEO/SEO';
import FAQs from '../../components/sections/home/FAQs';
import GenerateAviewForCompany from '../../components/sections/corporate/GenerateAviewForCompany';
import OurTranslationServices from '../../components/sections/corporate/OurTranslationServices';
import LanguagesServed from '../../components/sections/corporate/LanguagesServed';
import PreppingForBillC96 from '../../components/sections/corporate/PreppingForBillC96';

const Corporate = () => {
  return (
    <>
      <SEO
        title="Corporate - AVIEW"
        description="Organizations worldwide trust us to ensure they deliver their content in a language and format that meets their audience's needs. Contact Us Today!"
      />
      <Header curPage="Corporate" />
      <BrandGlobal />
      <OurMission />
      <GrowingInternationally />
      <OurTranslationServices />
      <LanguagesServed />
      <PreppingForBillC96 />
      {/* <OurMilestones /> */}
      {/* <Testimonials /> */}
      <WhyChooseUs />
      {/* <FAQs page="corporate" /> */}
      <GenerateAviewForCompany title="Generate Aview" />
      <Footer curPage="Corporate" />
      <Blobs />
    </>
  );
};

export default Corporate;
