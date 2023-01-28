import Button from '../../../UI/Button';

export default function WhyAview() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s5 text-center md:text-left">
        Why <span className="gradient-text gradient-2">Aview?</span>
      </h2>
      <div className="mb-s5 grid gap-s3 md:grid-cols-2">
        <div>
          <p className="mb-s2 text-5xl font-bold text-white">
            We put your goals first.
          </p>
          <p className="body">
            Everyone has a unique brand. Our translators collaborate closely
            with each of our clients to ensure that your resume represents you
            in the best way possible. We pride ourselves on going above and
            beyond to create transcriptions that will get you hired.
          </p>
        </div>
        <div>
          <p className="mb-s2 text-5xl font-bold text-white">
            Fast turnaround time
          </p>
          <p className="body">
            If you&apos;re on the job hunt, chances are you don&apos;t want to
            waste any time. That&apos;s why we provide fast services. Submit
            your resume to us, and you can expect high-quality translations
            within 48 hours.
          </p>
        </div>
      </div>
      <div className="text-center md:text-left">
        <Button type="secondary" purpose="route" route="#generate-aview">
          Get Started
        </Button>
      </div>
    </section>
  );
}
