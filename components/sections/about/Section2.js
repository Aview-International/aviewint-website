import Image from 'next/image';
import aboutGraphic from '../../../public/img/graphics/about-aview.png';

const Section2 = () => {
    return (
      <section className="section m-horizontal mt-s8 lg:mt-s17">
        <div className="items-center grid lg:grid-cols-6">
          <div className="col-span-3">
            <h1 className="title mb-s4">
            About <span className="gradient-text gradient-2">Aview</span> 
            </h1>
            <p className="body mb-s2">
            Aview is a multimedia translation company designed to help content creators and entertainers 
            expand their fan base through social media platforms. Aview focuses on content creators who 
            have developed a loyal fan base in their local market and seek international expansion. 
            </p>
          </div>
          <div className="col-span-7 mt-s4 lg:col-span-3 lg:max-w-[480px] lg:my-auto mx-auto">
            <Image src={aboutGraphic} alt="about-graphic" />
          </div>
        </div>
      </section>
    );
  };

export default Section2;
