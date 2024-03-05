import { AI_Tools_Page } from '../../../constants/constants';
import Image from 'next/image';

const AiToolsPage = () => {
  return (
    <section className="m-horizontal  text-white">
      <div className="my-s10 w-4/5 md:mx-auto md:w-2/4">
        <p className="text-start text-7xl font-semibold md:text-center">
          Advanced AI Creator Suite
        </p>
        <p className="text-start text-base md:text-center">
          Effortlessly capture, edit, and share audio & video content with
          Aview&rsquo;s comprehensive AI tools
        </p>
      </div>
      <div className="mb-s18 flex grid-cols-3 flex-col gap-5 md:grid md:gap-8">
        {AI_Tools_Page.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-center">
                <Image src={item.img} alt="img" width={240} height={240} />
              </div>
              <p className="mt-2 text-5xl font-semibold md:mt-4">
                {item.title}
              </p>
              <p className="mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AiToolsPage;
