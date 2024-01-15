import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import GoGlobal from '../../components/sections/home/GoGlobal';
import FAQ from '../../components/sections/home/FAQ';
import PickYourPlan from '../../components/sections/pricing/PickYourPlan';
import { useState } from 'react';
import PricingPlans from '../../components/sections/pricing/PricingPlans';
import CustomPricing from '../../components/sections/pricing/CustomPricing';
import JoinCreators from '../../components/sections/pricing/JoinCreators';
import PlanBreakdown from '../../components/sections/pricing/PlanBreakdown';
import { getPlans } from '../../services/apis';
import { useSelector } from 'react-redux';
import usePlans from '../../hooks/usePlans';
import { SUBSCRIPTION_PLANS_DESC } from '../../constants/constants';
import ContactSales from '../../components/sections/pricing/ContactSales';

export const getStaticProps = async () => {
  try {
    const plans = await getPlans();
    const plansJSON = JSON.stringify(plans);
    return {
      props: {
        plans: plansJSON,
      },
      revalidate: 60, // re-generate page every 60 seconds (if necessary)
    };
  } catch (error) {
    console.error('Error fetching plans:', error);
    return { props: { plans: {} } };
  }
};

const Pricing = ({ plans }) => {
  usePlans(JSON.parse(plans));
  const allPlans = useSelector((data) => data.aview.allPlans);
  const [sliderValue, setSliderValue] = useState(0);
  const [toggleIsChecked, setToggleIsChecked] = useState(false);
  const handleChange = () => setToggleIsChecked(!toggleIsChecked);
  const onSliderChange = (e) => setSliderValue(e.target.value);

  const newPlans = SUBSCRIPTION_PLANS_DESC.map((plan, i) => ({
    ...allPlans[i],
    ...plan,
  }));

  return (
    <>
      <SEO
        title="Pricing - AVIEW"
        description="Translate Your Favorite Influencer Videos! Apply to gain experience and become a translator, dubber, or editor. Apply Now!"
      />
      <EasterEgg />
      <Header curPage="Pricing" />
      <PickYourPlan
        onSliderChange={onSliderChange}
        isChecked={toggleIsChecked}
        sliderValue={sliderValue}
        handleChange={handleChange}
      />
      {sliderValue > 7 ? (
        <ContactSales />
      ) : (
        <PricingPlans
          isChecked={toggleIsChecked}
          plans={newPlans}
          sliderValue={sliderValue}
        />
      )}
      <CustomPricing />
      <JoinCreators />
      <PlanBreakdown
        isChecked={toggleIsChecked}
        handleChange={handleChange}
        allPlans={newPlans}
      />
      <ScrollToTopButton />
      <FAQ page="landing" />
      <GoGlobal />
      <Footer curPage="Pricing" />
      <Blobs />
    </>
  );
};

export default Pricing;
