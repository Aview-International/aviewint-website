import Banner from '../../layout/Banner';
import Button from '../../UI/Button';

const WhyChooseUs = () => {
  return (
    <section className="section text-center">
      <Banner>
        <h2 className="title mb-s2">Why Choose Us?</h2>
        <p className="body mx-auto mb-s4 max-w-[800px]">
          Aview will ensure your content is accurately translated and
          distributed within the right channels. Organizations around the world
          trust us with their content.
        </p>
        <div className="inline-block">
          <Button type="tertiary" purpose="route" route="#generate-aview">
            Contact Us
          </Button>
        </div>
      </Banner>
    </section>
  );
};

export default WhyChooseUs;
