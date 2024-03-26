export default function EasterEgg() {
  const numberOfIterations = 2;
  const dummyArray = Array.from({ length: numberOfIterations });
  return (
    <div className="gradient-2 flex cursor-pointer justify-start overflow-hidden whitespace-nowrap py-3">
      {dummyArray.map((_, index) => (
        <div
          className="animate-marquee flex flex-row  items-center"
          key={index}
        >
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            WE ARE LIVE
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            GLOBALIZE CONTENT TODAY
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            WE ARE LIVE
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            GLOBALIZE CONTENT TODAY
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            WE ARE LIVE
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            GLOBALIZE CONTENT TODAY
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
        </div>
      ))}
    </div>
  );
}
