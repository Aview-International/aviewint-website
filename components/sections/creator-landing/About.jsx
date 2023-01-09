import Image from 'next/image';

export default function About({ title, description, image }) {
  return (
    <div className="section m-horizontal grid items-center gap-s8 md:grid-cols-2">
      <div>
        <h2 className="h2 mb-s2">{title}</h2>
        <p className="body" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="mx-auto max-w-[300px] md:max-w-[400px]">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
}
