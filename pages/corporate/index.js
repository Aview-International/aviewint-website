import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import GrowingInternationally from '../../components/sections/corporate/GrowingInternationally';
import OurServices from '../../components/sections/reused/OurServices';
import OurMilestones from '../../components/sections/reused/OurMilestones';
import Testimonials from '../../components/sections/corporate/Testimonials';
import WhyChooseUs from '../../components/sections/corporate/WhyChooseUs';

const Corporate = () => {
  return (
    <>
      <Header curPage="Corporate" />
      <GrowingInternationally />
      <OurServices />
      <OurMilestones />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Corporate;
