import Image from 'next/image';
import billC96Graphic from '../../../public/img/graphics/prepping-bill-c96.png';

const PreppingForBillC96 = () => {
  return (
    <section className="section m-horizontal grid items-center md:grid-cols-[3fr_2fr] md:gap-s5">
      <div>
        <h2 className="title mb-s2">
          Prepping for{' '}
          <span className="gradient-text gradient-2">Bill C-96</span>
        </h2>
        <div className="mx-auto mb-s2 max-w-[380px] md:hidden">
          <Image src={billC96Graphic} alt="Prepping for Bill C-96" />
        </div>
        <p className="body mb-s3">
          Impacting Quebec businesses and trademarks, beginning June 1, 2022,
          the National Assembly of Quebec adopted Bill C-96, which enforces the
          use of French as the language of businesses offering goods and
          services to consumers.
        </p>
        <p className="body">
          With French as one of our most popular languages, our team at AVIEW is
          ready to translate all your content to comply with Bill C-96. For more
          information, visit our FAQ.
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={billC96Graphic} alt="Prepping for Bill C-96" />
      </div>
    </section>
  );
};

export default PreppingForBillC96;
