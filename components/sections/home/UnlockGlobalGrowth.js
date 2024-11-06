import GlobalButton from '../../UI/GlobalButton';
import videoAsset from '../../../public/img/aview/landing_page_video.mp4';
import ReactTyped from 'react-typed';
import FormInput from '../../FormComponents/FormInput'

const displayTexts = [
  'Transcribe',
  'Translate',
  'Subtitle',
  'Voiceover',
  'Distribute',
  'Monetize',
  'Manage',
  'Globalize',
];

const UnlockGlobalGrowth = () => {
  return (
    <section className="section m-horizontal mt-12 lg:mt-28">
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        {/* <div className="mt-10 mb-20 box-content flex">
          <h2 className="title">
            You Create
            <span className="hidden md:inline"> - </span>
            <br className="inline md:hidden" /> We{' '}
            <span className="gradient-text gradient-2">
              <ReactTyped
                strings={displayTexts}
                typeSpeed={100}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </span>
            className="mx-auto mb-s6 mt-s2 w-11/12 text-start font-extralight lg:w-1/2 lg:text-center"
          </h2>
        </div> */}
        <h1 className="title w-full lg:w-4/5 mx-auto text-center leading-none">Unlock Your Content&apos;s Global Potential with One Click of Aview</h1>
        <p className="body my-s6 mx-auto lg:w-1/2 text-center">
        An all-in-one content creation tool for creators to scale up content globally without a huge team or budget. Get a free sample to see for yourself
        </p>
        <div className="flex w-full justify-center">
          <GlobalButton purpose="route" route="/dashboard" type="secondary">
            Get Started
          </GlobalButton>
        </div>
        <div className="relative mt-12 h-[85%] cursor-pointer">
          <video className="rounded-md md:rounded-2xl" autoPlay loop muted>
            <source src={videoAsset} type="video/mp4" />
          </video>
          <div
            className="gradient-2 transition-300 absolute left-1/2 top-[50%] -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl md:opacity-95 md:blur-3xl"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default UnlockGlobalGrowth;
