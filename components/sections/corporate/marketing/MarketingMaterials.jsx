import Border from '../../../UI/Border';

const ITEMS = [
  'Brochures',
  'Business cards',
  'Emails',
  'Fliers',
  'Mailing campaigns',
  'Newspaper ads',
  'Social media channels',
  'Video productions',
  'Websites',
  'Business displays',
  'Blogs',
  'Webinars',
  'Online Ads',
  'Newsletters',
  'Catalogs',
  'Whitepapers',
  'E-books',
  'Testimonials',
];

export default function MarketingMaterials() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:mb-20 md:text-center">
        We Translate{' '}
        <span className="gradient-text gradient-2">
          All Marketing Materials
        </span>
      </h2>
      <div className="mx-auto flex max-w-[1108px] flex-wrap justify-center gap-x-4 gap-y-8">
        {ITEMS.map((item) => (
          <Border classes="rounded-md w-[47%] md:w-[23%]" key={item}>
            <div className="grid h-full place-content-center rounded-md bg-black p-2 text-center">
              <p className="body">{item}</p>
            </div>
          </Border>
        ))}
      </div>
    </section>
  );
}
