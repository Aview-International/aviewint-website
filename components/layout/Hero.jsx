import Image from 'next/image';
import GlobalButton from '../UI/GlobalButton';

export default function Hero({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  imageAlt,
}) {
  return (
    <section className="section m-horizontal mt-s5 grid items-center gap-s5 md:grid-cols-[3fr_2fr] lg:mt-s10">
      <div className="order-2 md:order-1">
        <h1
          className="title mb-s2 max-w-[610px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="body mb-s4 max-w-[600px]">{description}</p>
        <GlobalButton type="primary" purpose="route" route={buttonLink}>
          {buttonText}
        </GlobalButton>
      </div>
      <div className="order-1 mx-auto max-w-[380px] md:order-2 md:max-w-[610px]">
        <Image src={image} alt={imageAlt} />
      </div>
    </section>
  );
}
