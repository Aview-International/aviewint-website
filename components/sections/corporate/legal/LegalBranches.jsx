import Border from '../../../UI/Border';

const ITEMS = [
  'Admirality',
  'Bankruptcy',
  'Business',
  'Civil Rights',
  'Entertainment',
  'Environmental',
  'Health',
  'Labor',
  'Military',
  'Real Estate',
  'Tax',
  'Criminal',
  'Immigration',
  'Personal Injury',
  'International',
  'Intellectual Property',
];

export default function LegalBranches() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        Legal Branches{' '}
        <span className="gradient-text gradient-2">We Work With</span>
      </h2>
      <div className="mx-auto flex max-w-[1108px] flex-wrap justify-center gap-x-4 gap-y-8">
        {ITEMS.map((item) => (
          <Border classes="rounded-md w-[47%] md:w-[23%]" key={item}>
            <div className="h-full rounded-md bg-black p-2 text-center">
              <p className="body">{item}</p>
            </div>
          </Border>
        ))}
      </div>
    </section>
  );
}
