import FullWidthGradient from '../../layout/FullWidthGradient';
import Button from '../../UI/Button';
import TextInput from '../../UI/TextInput';

const Section9 = () => {
  return (
    <section className="section text-center">
      <FullWidthGradient>
        <h2 className="title mb-s2">Want To Go Global?</h2>
        <p className="body mb-s2">Give us your email. We will do the rest.</p>
        <div className="mx-auto max-w-[610px]">
          <TextInput
            placeholder="Your email address"
            bgColor="white"
            textColor="black"
          />
        </div>
        <p className="mt-s1 mb-s4 text-left text-xs text-white md:text-center md:text-sm">
          By signing up you agree to receive communications via email. For more
          information please refer to our Privacy Policy.
        </p>
        <Button type="tertiary" purpose="submit">
          Subscribe
        </Button>
      </FullWidthGradient>
    </section>
  );
};

export default Section9;
