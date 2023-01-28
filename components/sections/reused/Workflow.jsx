import Image from 'next/image';

export default function Workflow({ title, workflowSm, workflowLg }) {
  return (
    <section className="section m-horizontal text-center">
      <h2
        className="title mb-s5 md:mb-s10"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="md:hidden">
        <Image src={workflowSm} alt={title} />
      </div>
      <div className="hidden md:block">
        <Image src={workflowLg} alt={title} />
      </div>
    </section>
  );
}
