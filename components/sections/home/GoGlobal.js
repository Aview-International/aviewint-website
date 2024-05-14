import Button from '../../UI/Button';
import Image from 'next/image';
import Go_Global from '../../../public/img/graphics/new-landing-images/go_global.webp';

const GoGlobal = () => {
  return (
    <section className="section mx-auto  max-w-[1200px] text-center text-white" id="go-global">
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
            limitless opportunities. Secure your spot on the Aview waitlist now.
          </p>

          <Button purpose="route" route="/waitlist" type="tertiary">
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoGlobal;
