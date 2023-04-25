import Button from '../../../UI/Button';

const ITEMS = [
  {
    title: 'We Value Accuracy',
    description:
      'What makes scientific translations unique? They require 100% accuracy. Our talented translators take pride in always producing high-quality transcriptions. At AVIEW we guarantee fast, accurate, and effective services.',
  },
  {
    title: 'Fast Turnaround Time',
    description:
      "It's not uncommon for scientific projects to be time sensitive. We take into account our client's time constraints and requirements by providing a swift translation and localization process.",
  },
  {
    title: 'Expert Translators',
    description:
      'Scientific translations require professionals that are comfortable with scientific jargon. A mistranslated term can be detrimental to a report or article. This is why AVIEW provides translators that specialize in your field.',
  },
];

export default function WhyUseAview() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s5 text-center md:text-left">
        Why use <span className="gradient-text gradient-2">Aview?</span>
      </h2>
      <div className="mb-s5 grid gap-s3 md:grid-cols-2 xl:grid-cols-3">
        {ITEMS.map((item, i) => (
          <div key={item.title}>
            {/* <p className="mb-s3 text-5xl font-bold text-white">{i + 1}.</p> */}
            <p className="mb-s2 text-5xl font-bold text-white">{item.title}</p>
            <p className="body">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center md:text-left">
        <Button type="secondary" purpose="route" route="#generate-aview">
          Get Started
        </Button>
      </div>
    </section>
  );
}
