import Button from '../../UI/Button';

const CHANGE_PLAN_ARRAY = [
  {
    title: 'Starter Studio',
    _id: 1,
  },
  {
    title: 'Creater Pro',
    _id: 2,
  },
  {
    title: 'Global Influencer',
    _id: 3,
  },
  {
    title: 'Enterprise',
    _id: 4,
  },
];

const ChangePlan = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-10 text-white">
      <p className='text-2xl'>Change Your Plan</p>
      <div className="grid h-44 w-full grid-cols-5 rounded-md border-2 border-white/40">
        <div className="h-full rounded-l-md border-r-[1px] border-white/50 bg-white-transparent">
          <ChangePlanContainer title="Plan" id={0} />
        </div>
        {CHANGE_PLAN_ARRAY.map((planItem) => {
          return (
            <div
              className={`h-full w-full border-x-0 border-white/50 bg-transparent ${
                planItem._id === 4 ? 'rounded-r-md' : 'rounded-none'
              } ${planItem._id === 4 ? 'border-r-0' : 'border-r-[1px]'}`}
              key={planItem._id}
            >
              <ChangePlanContainer title={planItem.title} id={planItem._id} />
              <div className="flex h-2/3 w-full items-center justify-center">
                <Button type="primary">
                  {planItem._id <= 2 ? 'Downgrade' : 'Upgrade'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ChangePlanContainer = ({ title, id }) => {
  return (
    <div
      className="flex h-1/3 w-full items-center justify-center border-b-2"
      key={id}
    >
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default ChangePlan;
