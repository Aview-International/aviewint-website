import React from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import PricingPlans from '../../../../components/sections/pricing/PricingPlans';
import PlanBreakdown from '../../../../components/sections/pricing/PlanBreakdown';
import CustomPricing from '../../../../components/sections/pricing/CustomPricing';
import ChangePlan from '../../../../components/sections/pricing/ChangePlan';

const Plan = () => {
  return (
    <div>
      <Settings_Back_Button title="Plan" />
      <Container
        left={
          <>
            <p className='text-xl'>Your Plan.</p>
            <p>Edit or cancel your subscription settinsg here.</p>
          </>
        }
        isHeaderSection={true}
      />
      <div>
        {/* <PricingPlans /> */}
        <CustomPricing />
        <ChangePlan />
        {/* <PlanBreakdown /> */}
      </div>
    </div>
  );
};

Plan.getLayout = SettingsLayout;
export default Plan;
