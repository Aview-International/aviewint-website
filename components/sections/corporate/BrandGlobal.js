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
        <div className="mt-s4 lg:col-span-3 min-w-[300px] lg:min-w-[400px] lg:my-auto">
          <Image src={BrandGlobalImage} alt="landing-graphic" />
          </div>
          <span className='absolute w-[167px] right-80 top-28'>
          <Image src={BrandIcon1} alt="" />
        </span>
        <span className='absolute w-[196px] right-28 top-48'>
          <Image src={BrandIcon2} alt="" />
        </span>
        <span className='absolute w-[147px] right-24 -bottom-40'>
          <Image src={BrandIcon3} alt="" />
        </span>
      </div>
    </section>

  );
};

export default BrandGlobal;
