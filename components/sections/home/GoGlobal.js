import Button from '../../UI/Button';
import Image from 'next/image';
import Go_Global from '../../../public/img/graphics/new-landing-images/go_global.webp';

const GoGlobal = () => {
  
  return (
    <section className="section max-w-[1200px]  mx-auto text-center text-white">
      <div className='h-full lg:w-[90%]  grid grid-cols-1 md:grid-cols-2 place-items-center p-s3 md:p-0'>
        <Image src={Go_Global} alt='go_global' width="300" height="300"/>
        <div className='flex flex-col gap-y-6 justify-start items-start mt-s2 md:mt-0'>
          <h2 className='h2 text-start'>Unlock your global potential.</h2>
          <p className='text-lg md:text-xl text-start'>
            Step into a world of international growth, monetization, and limitless opportunities. Secure your spot on the Aview waitlist now.
          </p>
          <Button type="tertiary">Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};

export default GoGlobal;
