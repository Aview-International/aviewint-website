import GlobalButton from '../../UI/GlobalButton';
import Image from 'next/image';
import Go_Global from '../../../public/img/graphics/new-landing-images/go_global.webp';

const GoGlobal = () => {
  return (
    <section className="section mx-auto  max-w-[1200px] text-center text-white">
      <div className="grid h-full  grid-cols-1 place-items-center p-s3 md:grid-cols-2 md:p-0 lg:w-[90%]">
        <Image
          src={Go_Global}
          alt="go_global"
          width="300"
          height="300"
          placeholder="blur"
        />
        <div className="mt-s2 flex flex-col items-start justify-start gap-y-6 md:mt-0">
          <h2 className="h2 text-start">Unlock your global potential.</h2>
          <p className="text-start text-lg md:text-xl">
            Step into a world of international growth, monetization, and
            limitless opportunities.
          </p>

          <GlobalButton purpose="route" route="/login" type="tertiary">
            Sign Up
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default GoGlobal;
