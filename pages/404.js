import Image from 'next/image';
import Button from '../components/UI/Button';
import aviewLogo from '../public/img/aview/logo.svg';

const Page404 = () => {
  return (
    <div className="h-screen-trick grid w-screen place-content-center text-center">
      <h1 className="-mt-s6 -mb-s2 flex items-center gap-s3 sm:-mb-s5 md:-mb-s8 md:gap-s4">
        <span className="gradient-text gradient-1 text-[120px] font-bold xs:text-[160px] sm:text-[200px] md:text-[300px]">
          4
        </span>
        <span className="-mt-6 w-[100px] xs:w-[130px] sm:-mt-8 sm:w-[160px] md:-mt-14 md:w-[240px]">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            layout="responsive"
          />
        </span>
        <span className="gradient-text gradient-1 text-[120px] font-bold xs:text-[160px] sm:text-[200px] md:text-[300px]">
          4
        </span>
      </h1>
      <p className="gradient-text gradient-1 inline-block pb-s1 text-6xl font-bold md:pb-s2 md:text-8xl">
        Page Not Found
      </p>
      <p className="pb-s4 text-lg text-white md:text-xl">
        Sorry, we were unable to find that page!
      </p>
      <div>
        <Button type="primary" purpose="route" route="/">
          Home
        </Button>
      </div>
    </div>
  );
};

export default Page404;
