import Image from 'next/image';
import Button from '../../UI/Button';
import BrandGlobalImage from '../../../public/img/graphics/brand-global.png';
import BrandIcon1 from '../../../public/img/graphics/brand-icon1.png';
import BrandIcon2 from '../../../public/img/graphics/brand-icon2.png';
import BrandIcon3 from '../../../public/img/graphics/brand-icon3.png';
import BrandIcon4 from '../../../public/img/graphics/brand-icon4.png';

const BrandGlobal = () => {
  return (

    <section className="section m-horizontal mt-s8 lg:mt-s17">
      <div className="grid lg:grid-cols-7 items-center">
        <div className="col-span-3">
          <h1 className="title mb-s3">
           <span className="gradient-text gradient-2">Take your brand global</span>
          </h1>
          <p className="body mb-s4">
            Globalize your brand and media content through translations and
            dubbing.
          </p>
          <Button type="primary" purpose="submit">
           Contact Us
          </Button>
        </div>
        <div className="mt-s4 lg:col-span-4 max-w-[600px] lg:max-w-[40vw]">
          <Image src={BrandGlobalImage} alt="landing-graphic" />
          </div>
          <span className='absolute w-[12vw] min-w-[90px] max-w-[167px] lg:right-52 lg:top-28 md:right-56 md:-bottom-20 right-32 -bottom-12'>
          <Image src={BrandIcon1} alt="" />
        </span>
        <span className='absolute w-[14vw] min-w-[106px] max-w-[196px] lg:right-4 lg:top-48 md:right-28 md:-bottom-44 right-12 -bottom-36'>
          <Image src={BrandIcon2} alt="" />
        </span>
        <span className='absolute w-[10vw] min-w-[80px] max-w-[147px] lg:right-4 lg:top-96 md:right-24 md:-bottom-72 right-12 -bottom-60'>
          <Image src={BrandIcon3} alt="" />
        </span>
      </div>
    </section>

  );
};

export default BrandGlobal;
