import Border from '../../../UI/Border';

const ITEMS = [
  'Annual Reports',
  'Bank Statements',
  'Invoices',
  'Receipts',
  'Cash Memos',
  'Statements of Changes in Equity',
  'Bank Statements',
];

export default function AllFinancialDocuments() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 md:text-center">
        We Translate{' '}
        <span className="gradient-text gradient-2">
          All Financial Documents
        </span>
      </h2>
      <p className="body mb-10">
        At AVIEW, we provide services for all types of documents whether they
        are for financial, medical, legal, or entertainment purposes. Our
        personalized approach to each of our clients is what enables us to
        translate material of any kind.
      </p>
      <div className="mx-auto flex max-w-[760px] flex-wrap gap-4 md:justify-center md:gap-8">
        {ITEMS.map((item) => (
          <Border classes="rounded-md" key={item}>
            <div className="rounded-md bg-black p-2">
              <p className="body">{item}</p>
            </div>
          </Border>
        ))}
      </div>
    </section>
  );
}
