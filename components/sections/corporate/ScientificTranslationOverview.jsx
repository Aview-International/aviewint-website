import scientificArticles from '../../../public/img/graphics/corporate/scientific-articles.png';
import manuals from '../../../public/img/graphics/corporate/manuals.png';
import clinicalTrialReports from '../../../public/img/graphics/corporate/clinical-trial-reports.png';

const ITEMS = [
  {
    title: 'Scientific Artciels',
    description:
      'Scientific papers and articles are a great way to share your work with other researchers. AVIEW translates articles so that scientists around the globe can collaborate. Research papers require high accuracy and readability. At AVIEW, we provide clear and concise material for you.',
    image: scientificArticles,
  },
  {
    title: 'Manuals',
    description:
      'Procedures, processes, and etiquette must be compiled in scientific manuals to ensure safety and efficacy. Translating manuals can help researchers that speak different languages understand how to do their work correctly. We specialize in translating manuals.',
    image: manuals,
  },
  {
    title: 'Clinical Trial Reports',
    description:
      'Studies are documented using clinical trial reports to demonstrate methodology and results. To help researchers from around the world have access to clinical trial reports, AVIEW translates them into different languages.',
    image: clinicalTrialReports,
  },
];

export default function ScientificTranslationOverview() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s2 md:text-center">
        Aview&apos;s Scientific Translation{' '}
        <span className="gradient-text gradient-2">Overview</span>
      </h2>
      <p className="body mb-s2">
        Translating scientific material is the first step to international
        collaboration. At Aview, we take a personalized approach to your
        projects. We help translate reports, data, and more.
      </p>
      <p className="body mb-s5">
        Scientific translation requires complete accuracy and expertise in the
        material. Our certified translators are here to create the highest
        quality translations for you. We cater to your specific needs so that
        you can reach your goals.
      </p>
      <div className="grid gap-s3">
        {ITEMS.map((item) => (
          <div className="grid" key={item.title}>
            <div className="order-2">
              <h3 className="">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
