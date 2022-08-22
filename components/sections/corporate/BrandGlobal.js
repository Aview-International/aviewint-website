import Image from 'next/image';
import Button from '../../UI/Button';
import BrandGlobalImage from '../../../public/img/graphics/brand-global.png';
import BrandIcon1 from '../../../public/img/graphics/brand-icon1.png';
import BrandIcon2 from '../../../public/img/graphics/brand-icon2.png';
import BrandIcon3 from '../../../public/img/graphics/brand-icon3.png';
import BrandIcon4 from '../../../public/img/graphics/brand-icon4.png';

const BrandGlobal = () => {
  return (
    <section className="section m-horizontal relative mt-s12 lg:mt-s16">
      <div className="grid items-center gap-s7 md:grid-cols-2">
        <div className="relative">
          <span className="absolute top-[-100px] right-[110px] hidden max-w-[90px] 2xs:block md:hidden">
            <Image src={BrandIcon1} alt="" />
          </span>
          <span className="absolute top-[-80px] right-0 hidden max-w-[100px] 2xs:block md:hidden">
            <Image src={BrandIcon2} alt="" />
          </span>
          <span className="absolute top-[30px] right-0 hidden max-w-[80px] 2xs:block md:hidden">
            <Image src={BrandIcon3} alt="" />
          </span>
          <h1 className="title mb-s3 max-w-[249px] xs:max-w-[400px] sm:max-w-none">
            <span className="gradient-text gradient-2">
              Take your brand global
            </span>
          </h1>
          <p className="body mb-s4 max-w-[315px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[none]">
            Globalize your brand and media content through translations and
            dubbing.
          </p>
          <Button type="primary" purpose="submit">
            Contact Us
          </Button>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-[340px] md:max-w-[448px]">
            <Image src={BrandGlobalImage} alt="landing-graphic" />
          </div>
          <span className="absolute top-[-150px] right-[120px] hidden max-w-[167px] lg:block xl:right-[150px]">
            <Image src={BrandIcon1} alt="" />
          </span>
          <span className="absolute top-[-120px] right-[-80px] hidden max-w-[196px] lg:block xl:right-[-50px]">
            <Image src={BrandIcon2} alt="" />
          </span>
          <span className="absolute top-[90px] right-[-100px] hidden max-w-[147px] lg:block xl:right-[-70px]">
            <Image src={BrandIcon3} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandGlobal;
