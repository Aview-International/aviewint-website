import Image from 'next/image';
import Button from '../../components/UI/Button';
import ThankYou from '../../public/img/graphics/thank-you.png';
import Confetti from '../../components/UI/Confetti';

const Success = () => {
  return (
    <div className="h-screen-trick grid place-content-center text-center">
      <div>
        <div className="mx-auto mt-0 mb-s4 max-w-[300px]">
          <Image src={ThankYou} alt="thank you graphic" />
        </div>
        <Confetti />
        <h2 className="title">
          <span className="gradient-1 gradient-text">Thank You!</span>
        </h2>
        <p className={`my-s3 max-w-[320px] text-xl text-white`}>
          We have received your message. We&apos;ll get back to you shortly!
        </p>
        <Button type="primary" purpose="route" route="/">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default Success;
