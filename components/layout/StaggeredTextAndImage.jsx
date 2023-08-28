import Image from 'next/image';

export default function StaggeredTextAndGraphic({ items, staggeredStyle }) {
  return (
    <div
      className={`grid ${
        staggeredStyle ? 'my-s5 gap-y-s2' : 'gap-s5 md:gap-s8'
      }`}
    >
      {staggeredStyle ? (
        <>
          {items.map((item, i) => (
            <div
              className="flex flex-col justify-between gap-s2 md:flex-row md:items-center md:gap-s3"
              key={item.title}
            >
              <div
                className={`order-1 w-full md:w-[50%] md:pl-s10 ${
                  i % 2 != 0 ? '' : 'md:order-2'
                }`}
              >
                <h3 className="gradient-text gradient-1 mb-s1 text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="body w-[65%]">{item.description}</p>
              </div>
              <div
                className={`group relative order-2 mx-auto h-full w-full cursor-pointer md:w-[45%] ${
                  i % 2 != 0 ? '' : 'md:order-1'
                }`}
              >
                <Image src={item.image} alt={item.title} />
                <div
                  className={
                    'gradient-1 transition-300 absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-70 blur-2xl md:opacity-0 md:blur-3xl md:group-hover:opacity-90'
                  }
                ></div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {items.map((item, i) => (
            <div
              className="grid items-center gap-s2.5 md:grid-cols-2"
              key={item.title}
            >
              <div className={`order-1 ${i % 2 === 0 ? '' : 'md:order-2'}`}>
                <h3 className="mb-s2 text-5xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="body">{item.description}</p>
              </div>
              <div
                className={`order-2 mx-auto w-[240px] md:w-[300px] ${
                  i % 2 === 0 ? '' : 'md:order-1'
                }`}
              >
                <Image src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
