import Button from '../../UI/Button';
import videoAsset from '../../../public/img/aview/landing_page_video.mp4';
import ReactTyped from 'react-typed';

const UnlockGlobalGrowth = () => {
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
  return (
    <section className="section m-horizontal mt-12 lg:mt-28" data-test="unlock-growth">
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        <div className="mt-10 mb-20 box-content flex">
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
          </h2>
        </div>
        <h1 className="title">Unlock Global Growth, One Click at a Time</h1>
        <p className="body mt-2 mb-8 max-w-full md:mt-0 md:text-center">
          Monetize, translate, and distribute your content to millions worldwide
          with Aview.
        </p>
        <div className="flex w-full justify-start md:justify-center">
          <Button purpose="route" route="/waitlist" type="tertiary">
            Join Waitlist
          </Button>
        </div>
        <div className="relative mt-12 h-[85%] cursor-pointer">
          <video className="rounded-md md:rounded-2xl" autoPlay loop muted>
            <source src={videoAsset} type="video/mp4" />
          </video>
          <div
            className={`gradient-2 transition-300 absolute left-1/2 top-[50%] -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl md:opacity-95 md:blur-3xl`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default UnlockGlobalGrowth;
