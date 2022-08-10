import FullWidthGradient from '../../layout/FullWidthGradient';
import Button from '../../UI/Button';

const AtAview = () => {
  return (
    <section className="section text-center">
      <FullWidthGradient>
        <h2 className="title mx-auto mb-s2 max-w-[1171px]">
          At Aview, our services fit any size creator! We have an offering that
          would work for you.
        </h2>
        <p className="body mb-s4">
          Want to learn more about our services? Contact us below!
        </p>
        <div className="mx-auto inline-block">
          <Button type="tertiary" purpose="route" route="#generate-aview">
            Contact Us
          </Button>
        </div>
      </FullWidthGradient>
    </section>
  );
};

export default AtAview;
