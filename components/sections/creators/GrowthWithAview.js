import Image from 'next/image';
import { GROWTH_WITH_AVIEW_CREATORS } from '../../../constants/constants';
import Border from '../../UI/Border';
import Button from '../../UI/Button';
import Shadow from '../../UI/Shadow';

const GrowthWithAview = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s10 md:text-center ">
        <span className="gradient-text gradient-2">Growth </span> with Aview
      </h2>
      <div>
        {GROWTH_WITH_AVIEW_CREATORS.map((creator, i) => (
          <Creators key={`creator-${i}`} {...creator} />
        ))}
      </div>
    </section>
  );
};

const Creators = ({ picture, name, subscribers, summary }) => {
  return (
    <div className="mb-s10 flex flex-col justify-between lg:flex-row">
      <div className="mb-s3 flex w-full items-center justify-around lg:w-[60%]">
        <span className="h-[75px] w-[75px] rounded-full lg:h-[120px] lg:w-[120px]">
          <Image
            src={picture}
            alt={name}
            layout="responsive"
            className="rounded-full"
          />
        </span>
        <div>
          <h3 className="text-xl text-center text-white lg:text-4xl">{name}</h3>
          <p className="text-center text-sm text-white lg:text-xl">
            {subscribers}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <Border classes="w-full" borderRadius="[5px]">
          <Shadow classes="w-full flex">
            <div className="block h-[215px] lg:h-[310px]">
              <Image
                src={summary}
                alt={name}
                className="h-full w-full"
                layout="fill"
              />
            </div>
          </Shadow>
        </Border>
        <div className="mt-s4 flex justify-center">
          <Button
            type="secondary"
            purpose="route"
            route="https://drive.google.com/uc?id=13kcTlbpu2UbFgGzfJHIwXaY2v--_V9Re&export=download"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GrowthWithAview;
