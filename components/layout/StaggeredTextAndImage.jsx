import Image from 'next/image';

export default function StaggeredTextAndGraphic({ items, staggeredStyle }) {
  return (
    <div className={`grid ${staggeredStyle ?'gap-y-s2 my-s5' : 'gap-s5 md:gap-s8'}`}>
     {
      staggeredStyle ? 
      <>
       {items.map((item, i) => (
        <div
          className="flex flex-col md:flex-row gap-s2 md:gap-s3 md:items-center justify-between"
          key={item.title}
        >
          <div className={`order-2 w-full md:w-[50%] md:pl-s10 ${i % 2 != 0 ? 'md:order-1' : ''}`}>
            <h3 className="mb-s1 mtext-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="w-[65%] body">{item.description}</p>
          </div>
          <div
            className={`order-1 group relative mx-auto w-full h-full md:w-[45%] cursor-pointer ${
              i % 2 != 0 ? 'order-2' : ''
            }`}
          >
            <Image src={item.image} alt={item.title} />
            <div className={"gradient-1 transition-300 absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-70 md:opacity-0 blur-2xl md:blur-3xl md:group-hover:opacity-90"}
            ></div>
          </div>
        </div>
      ))}
      </>
      :
      <>
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
      </>
     }
    </div>
  );
}
