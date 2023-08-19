import PricePlan from './PricePlan';
import PriceText from './PriceText';

const PricePage = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col items-center justify-center gap-y-s5 py-s6">
        <PriceText />
        <PricePlan />
      </div>
    </section>
  )
}

export default PricePage
