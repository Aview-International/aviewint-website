import Border from '../UI/Border';
import Card from '../UI/Card';
import GlobalButton from '../Onboarding/button';
import { useState } from 'react';
import RadioInput from '../FormComponents/RadioInput';
import Textarea from '../FormComponents/Textarea';

const CANCEL_REASON = [
  "It's too expensive",
  'I was not happy with quality',
  'Low monetization on international channels',
  'I found an alternative company',
  'I have another account',
  'No reason',
];

const PriceSection = ({ plan, userPlan, handlePricing, buttonId }) => {
  const [isChecked, setToggleIsChecked] = useState(false);

  return (
    <div className="relative h-full w-full cursor-pointer rounded-xl bg-white-transparent px-2 py-4 md:px-6">
      <span className="rounded-md bg-gray-1 p-2 uppercase">{plan.desc}</span>
      <div className="my-s2 flex flex-row items-center justify-start gap-x-2">
        <p className="text-xl font-bold md:text-4xl">
          {(typeof plan.monthlyCost === 'number' ||
            typeof plan.monthlyCost === 'number') &&
            '$'}
          {!isChecked ? plan.monthlyCost : Math.round(plan.yearlyCost / 12)}
        </p>
        {plan.id != 'basic' && (
          <p>
            Per month, billed &#36;
            {isChecked ? plan.yearlyCost : plan.monthlyCost * 12} annually
          </p>
        )}
      </div>
      <div className="capitalize">
        <GlobalButton
          isLoading={buttonId === plan.stripe_monthly_id}
          theme={plan.id === 'pro' ? 'light' : 'dark'}
          onClick={() => handlePricing(plan.stripe_monthly_id)}
        >
          Go {plan.id}
        </GlobalButton>
      </div>

      <p className="mb-2 mt-s3 font-semibold">{plan.description}</p>

      {plan.id === userPlan && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium text-black">
              CURRENT PLAN
            </div>
          </Border>
        </div>
      )}
    </div>
  );
};

const DashboardPlans = ({
  plans,
  buttonId,
  handlePricing,
  isChecked,
  userPlan,
  handleCancelSub,
  cancelSubLoader,
}) => {
  const [showCancelSub, setShowCancelSub] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  return (
    <section>
      {showCancelSub ? (
        <div className="w-full text-lg xs:w-96">
          <p className="mb-s3 text-xl">Cancelling your subscription?</p>
          <p>Tell us why you&#39;re leaving us</p>
          <div className="my-s2">
            {CANCEL_REASON.map((reason, i) => (
              <div className="my-s1" key={i}>
                <RadioInput
                  name="cancel-sub"
                  label={reason}
                  value={reason}
                  chosenValue={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                />
              </div>
            ))}
          </div>
          <Textarea
            placeholder="More details..."
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
          />
        </div>
      ) : (
        <div className="z-20 mb-10 flex justify-center gap-8 px-4 md:px-0">
          {plans.map((plan, index) => (
            <div key={index}>
              {plan.id === userPlan ? (
                <Card borderRadius="xl" fullWidth={true}>
                  <PriceSection
                    plan={plan}
                    isChecked={isChecked}
                    userPlan={userPlan}
                    handlePricing={handlePricing}
                    buttonId={buttonId}
                  />
                </Card>
              ) : (
                <PriceSection
                  plan={plan}
                  isChecked={isChecked}
                  userPlan={userPlan}
                  handlePricing={handlePricing}
                  buttonId={buttonId}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {userPlan && userPlan !== 'free' && (
        <div className="flex w-full max-w-[14rem] ml-auto justify-end">
          <GlobalButton
            isLoading={cancelSubLoader}
            onClick={
              showCancelSub
                ? () => handleCancelSub(cancelReason, otherReason)
                : () => setShowCancelSub(true)
            }
            theme="error"
          >
            Cancel Subscription
          </GlobalButton>
        </div>
      )}
    </section>
  );
};

export default DashboardPlans;
