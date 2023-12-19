import PricePlan from './PricePlan';
import PickYourPlan from './PickYourPlan';

const PricePage = () => {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex flex-col items-center justify-center gap-y-s5 py-s6">
          <PricePlan />
        </div>
      </div>
    </>
  );
};

export default PricePage;
