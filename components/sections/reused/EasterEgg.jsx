import Link from 'next/link';

export default function EasterEgg() {
  const numberOfIterations = 2;
  const dummyArray = Array.from({ length: numberOfIterations });
  return (
    <Link href="/coming-soon">
      <div className="gradient-2 cursor-pointer py-3 flex justify-start whitespace-nowrap overflow-hidden">
        {
          dummyArray.map(( _ , index ) => {
            return (
              <div className='flex flex-row items-center  animate-marquee' key={index}>
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                Click here to learn more
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                COMING SOON
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                Click here to learn more
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                COMING SOON
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                Click here to learn more
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
              <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
                COMING SOON
              </p>
              <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
            </div>
            )
          })
        }
      </div>
    </Link>
  );
}
