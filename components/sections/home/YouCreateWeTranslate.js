import Button from '../../UI/Button';
import globeGraphic from '../../../public/img/graphics/globe.png';
import Image from 'next/image';

const YouCreateWeTranslate = () => {
  return (
    <section className="section m-horizontal grid items-center gap-10 md:grid-cols-[4fr,3fr] md:gap-12 lg:gap-40">
      <div>
        <h2 className="title pb-4">
          You <span className="gradient-text gradient-2">Create.</span> We
          Translate.
        </h2>
        <p className="body pb-8">
          AVIEW hand picks the best translators and voice actors for your
          content. We cater our approach to each individual creator and their
          brand. Our team is ready to help you gain a AVIEW on your competition.
        </p>
        <Button type="primary" purpose="route" route="/#generate-aview">
          Go Global Now!
        </Button>
      </div>
      <div className="mx-auto max-w-[400px] md:max-w-none">
        <Image src={globeGraphic} alt="Translation graphic" />
      </div>
    </section>
  );
};

export default YouCreateWeTranslate;
