import Image from 'next/image';
import billc96 from '../../../public/img/graphics/corporate/bill96.png';

export default function PreppingForBillC96() {
  return (
    <section className="section m-horizontal grid gap-s4 lg:grid-cols-2 lg:items-center">
      <div className="order-2 lg:order-1 lg:-mt-s2">
        <h2 className="title mb-s2">
          Prepping for{' '}
          <span className="gradient-text gradient-1">Bill C-96</span>
        </h2>
        <p className="body mb-s3 lg:mb-s4">
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
      <div className="order-1 mx-auto lg:order-2">
        <Image src={billc96} alt="Bill C-96" />
      </div>
    </section>
  );
}
