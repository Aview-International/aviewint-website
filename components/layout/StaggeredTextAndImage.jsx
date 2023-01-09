import Image from 'next/image';

export default function StaggeredTextAndGraphic({ items }) {
  return (
    <div className="grid gap-s5 md:gap-s8">
      {items.map((item, i) => (
        <div
          className="grid items-center gap-s2.5 md:grid-cols-2"
          key={item.title}
        >
          <div className={`order-2 ${i % 2 === 0 ? 'md:order-1' : ''}`}>
            <h3 className="mb-s2 text-5xl font-bold text-white">
              {item.title}
            </h3>
            <p className="body">{item.description}</p>
          </div>
          <div
            className={`order-1 mx-auto w-[240px] md:w-[300px] ${
              i % 2 === 0 ? 'order-2' : ''
            }`}
          >
            <Image src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
