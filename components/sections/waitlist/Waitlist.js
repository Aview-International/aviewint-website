import React,{ useState } from 'react';
import Step3 from '../../../public/img/waitlist/Step3.svg';
import HoverShowImageOrText from '../../layout/HoverShowImageOrText';
import StaggeredTextAndImage from '../../layout/StaggeredTextAndImage';
import { WAITLIST_HOVER_ITEMS, WAITLIST_STAGGERED_ITEMS } from '../../../constants/constants';
import FormInput from '../../FormComponents/FormInput';
import Button from '../../UI/Button';
import WaitlistImages from './WaitlistImages';
import AboutCreator from './AboutCreator';

const Waitlist = () => {
 const [userEmail,setUserEmail] = useState('');
 const [sideEffects, setSideEffects] = useState({
  hasSubmitted: false,
  isLoading: false,
 });

 const handleSubmit = async () => {
  setSideEffects({ ...sideEffects, hasSubmitted: true });
  if (!isFormValid()) return;
  setSideEffects({ ...sideEffects, isLoading: true });
  try {
   // router.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
 };

 return (
    <>
      <section className="w-[90%] h-full flex flex-col gap-y-24 md:gap-y-40 mx-auto my-10 md:my-28">
          <div className="flex flex-col md:flex-row justify-between md:mx-s6">
             <div className="mx-auto flex flex-col justify-start gap-y-4 md:gap-y-6 text-white">
               <h3 className="font-bold text-5xl md:text-7xl">Global Content <span className="md:block">Monetization: Reach</span> <span className="md:block">New Markets with Aview</span></h3>
               <p className="md:text-lg md:mb-8">Break language barriers, grow your fan base, and monetize<span className="md:block">internationally. Join our exclusive waitlist today!</span></p>
               <WaitlistImages image={Step3} width="540" height="385"/>
             </div>
             <AboutCreator />
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <h3 className="text-5xl md:text-6xl text-center font-bold mb-10">Empower your global react with Aview:<span className="md:block">Your One-Stop Solution for International Success</span></h3>
            <HoverShowImageOrText items={WAITLIST_HOVER_ITEMS} borderStyle="true"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 text-white">
            <h3 className="text-4xl md:text-6xl font-bold mb-5">Globalize Your Content & Monetize Across Borders:
              <span className="md:block">Aview's One-Click Solution</span></h3>
            <p className="text-sm md:text-base md:text-center">&#8220;Transforming your content for international success is just a click away. With Aview, you're not<span className="md:block">just translating; you're unlocking new markets, engaging global audiences, and creating lucrative</span><span className="md:block">opportunities—all in one platform.&#8221;</span></p>
            <StaggeredTextAndImage items={WAITLIST_STAGGERED_ITEMS} staggeredStyle="true"/>
          </div>
          <div className="w-full h-full rounded-xl gradient-2 p-s1.5 md:p-0 py-s3 md:py-s6">
            <p className="text-white font-bold p-2 md:p-0 text-3xl md:text-4xl text-center mb-4">Want to go global? Join the <span className="md:block">waitlist now to reserve a spot!</span></p>
            <div className="w-full md:w-2/4 h-full flex flex-col md:flex-row md:gap-y-4 md:gap-x-2 items-center justify-center mx-auto">
              <FormInput 
               _id="waitlist_input"
               onChange={(option) =>
                setUserEmail(option.target.value)
               } 
               placeholder="Enter your email here"
               value={userEmail} 
               name="waitlist_input" 
               hideCheckmark={true}
              />
              <div>
               <Button 
                type="tertiary"
                purpose='submit'
                onClick={handleSubmit}
               >
                Join Waitlist
               </Button>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

 
export default Waitlist;