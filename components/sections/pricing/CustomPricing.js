import Button from '../../UI/Button';
import Image from 'next/image';
import dropDownArrow from '../../../public/img/icons/dropdown-arrow.svg';
import { CUSTOM_PRICING_FEATURES } from '../../../constants/constants';
import Link from 'next/link';

const CustomPricing = () => {
  return (
    <section className="m-horizontal mt-s2 text-white">
      <div className="rounded-xl bg-white-transparent px-4 py-8">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-full gap-y-5 md:w-1/3 md:text-center">
            <span className="rounded-md bg-gray-1 p-s1 pt-2.5 uppercase">
              ENTERPRISE
            </span>
            <h4 className="my-s3 mb-s2 text-6xl font-semibold">
              Custom Pricing
            </h4>
            <p className="mb-s3 text-lg">Tailored to your needs</p>
            <Button
              type="secondary"
              purpose="route"
              route="mailto:julia@aviewint.com"
            >
              Contact sales
            </Button>
          </div>

          <div className="mt-s4 grid w-full grid-cols-2 justify-center gap-6 md:my-0 md:w-2/3 md:grid-cols-[repeat(auto-fill,200px)]">
            {CUSTOM_PRICING_FEATURES.map((feature, i) => (
              <div key={i} className="text-center">
                <Image src={feature.image} alt="" width={40} height={40} />
                <p className="text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href="/pricing#all-features">
        <a className="my-s4 flex place-content-center text-center text-xl hover:underline">
          <span className="mr-s2">See all features</span>
          <Image src={dropDownArrow} alt="" width={18} height={18} />
        </a>
      </Link>
    </section>
  );
};

export default CustomPricing;
