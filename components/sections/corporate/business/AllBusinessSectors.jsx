import Border from '../../../UI/Border';

const ITEMS = [
  'Healthcare',
  'Material',
  'Real Estate',
  'Consumer Staples',
  'Utilities',
  'Technology',
  'Energy',
  'Industrials',
  'Consumer Services',
  'Financials',
  'Consumer Discretionary',
];

export default function AllBusinessSectors() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        We Work With{' '}
        <span className="gradient-text gradient-2">All Business Sectors</span>
      </h2>
      <div className="mx-auto flex max-w-[1070px] flex-wrap gap-y-6 gap-x-4 md:justify-center md:gap-x-6">
        {ITEMS.map((item) => (
          <Border classes="rounded-md h-full" key={item}>
            <div className="rounded-md bg-black py-2 px-4 text-center md:px-12">
              <p className="body">{item}</p>
            </div>
          </Border>
        ))}
      </div>
    </section>
  );
}
