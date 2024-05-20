import Image from 'next/image';
import aboutGraphic from '../../../public/img/graphics/about-aview.png';

const AboutAview = () => {
  return (
    <section
      className="section m-horizontal mt-s6 lg:mt-s17"
      data-aos="zoom-in-left"
    >
      <div className="grid items-center lg:grid-cols-6">
        <div className="col-span-3">
          <h1 data-test="about-aview" className="title mb-s4">
            About <span className="gradient-text gradient-2">Aview</span>
          </h1>
          <p data-test="about-aview-body" className="body mb-s2">
            Aview is a multimedia translation company designed to help content
            creators and entertainers expand their fan base through social media
            platforms. Aview focuses on content creators who have developed a
            loyal fan base in their local market and seek international
            expansion.
          </p>
        </div>
        <div className="col-span-7 mx-auto mt-s4 lg:col-span-3 lg:my-auto lg:max-w-[480px]">
          <Image src={aboutGraphic} alt="about-graphic" />
        </div>
      </div>
    </section>
  );
};

export default AboutAview;
