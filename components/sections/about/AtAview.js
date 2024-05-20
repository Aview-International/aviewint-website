import Banner from '../../layout/Banner';

const AtAview = () => {
  return (
    <section className="section" id="at-aview">
      <Banner>
        <p data-test="at-aview-heading" className="body mx-auto mb-s2 max-w-[810px] text-center">
          At Aview we
        </p>
        <h2 data-test="at-aview-body" className="title mx-auto max-w-[1243px] text-center">
          Ensure your content is translated accurately, guaranteeing a positive
          return.
        </h2>
      </Banner>
    </section>
  );
};

export default AtAview;
