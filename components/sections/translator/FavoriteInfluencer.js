import Image from 'next/image';
import landingGraphic from '../../../public/img/graphics/translator-landing.png';
import Button from '../../UI/Button';

const FavoriteInfluencer = () => {
  return (
    <section className="section m-horizontal mt-s8 lg:mt-s17">
      <div className="grid lg:grid-cols-7 items-center">
        <div className="col-span-3">
          <h1 className="title mb-s3">
           <span className="gradient-text gradient-2">Translate Your Favorite Influencer Videos!</span>
          </h1>
          <p className="body mb-s4 lg:max-w-[400px]">
          Apply now to join our team of translators, dubbers and editors. 
          </p>
          <Button type="primary" purpose="submit">
           Contact Us
          </Button>
        </div>
        <div className="mt-s4 lg:col-span-4 min-w-[300px] lg:min-w-[700px] lg:my-auto">
          <Image src={landingGraphic} alt="landing-graphic" />
        </div>
      </div>
    </section>
  );
}
  
  export default FavoriteInfluencer;