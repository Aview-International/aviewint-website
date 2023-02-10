import Button from '../../UI/Button';

export default function WhyUseAview({ items }) {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s5 text-center md:text-left">
        Why use <span className="gradient-text gradient-2">Aview?</span>
      </h2>
      <div className="mb-s5 grid gap-s3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.title}>
            <p className="mb-s3 text-5xl font-bold text-white">{i + 1}.</p>
            <p className="mb-s2 text-5xl font-bold text-white">{item.title}</p>
            <p className="body">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center md:text-left">
        <Button type="secondary" purpose="route" route="#generate-aview">
          Book a Meeting Today
        </Button>
      </div>
    </section>
  );
}
