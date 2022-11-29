import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function EasterEgg() {
  return (
    <Link href="/coming-soon">
      <div className="gradient-2 cursor-pointer py-3">
        <Marquee gradient={false} speed={40}>
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
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            Click here to learn more
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
          <p className="mr-s2 text-lg font-medium text-white md:mr-s4 md:text-xl">
            COMING SOON
          </p>
          <div className="mr-s2 -mt-1 h-s1 w-s1 rounded-full bg-white md:mr-s4" />
        </Marquee>
      </div>
    </Link>
  );
}
