import GlobalButton from '../../UI/GlobalButton';
import videoAsset from '../../../public/img/aview/landing_page_video.mp4';

const UnlockGlobalGrowth = () => {
  return (
    <section className="section m-horizontal mt-12 lg:mt-28">
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        <h1 className="title mx-auto w-full text-center lg:w-4/5">
          Unlock Your Content&apos;s Global Potential with One Click of Aview
        </h1>
        <p className="body my-s6 mx-auto text-center lg:w-1/2">
          An all-in-one content creation tool for creators to scale up content
          globally without a huge team or budget. Get a free sample to see for
          yourself
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
          <div className="gradient-2 transition-300 absolute left-1/2 top-[50%] -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl md:opacity-95 md:blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default UnlockGlobalGrowth;
