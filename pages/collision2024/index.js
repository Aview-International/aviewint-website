import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import LogoAview from '../../public/img/aview/Aviewlogo.png';
// import CollisionDesign from '../../public/img/aview/collisionimg.png';

const CollisionPage24 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <header className="absolute top-8 left-8">
        {/* <Image src={LogoAview} alt="Aview Logo" width={150} height={45} /> */}
      </header>
      <main className="flex w-full flex-col items-center justify-center px-11 md:flex-row">
        <div className="flex justify-center md:w-1/2">
          {/* <Image
            src={CollisionDesign}
            alt="Aview Dashboard"
            width={600}
            height={400}
          /> */}
        </div>
        <div className="mt-8 flex flex-col items-start text-left md:mt-0 md:w-1/2 md:items-start md:pl-8 md:text-left">
          <h1 className="text-7xl font-bold md:text-7xl">
            Dub your video for free with Aview
          </h1>
          <ul className="mt-4 space-y-2 text-left text-lg md:text-xl">
            <li>1. Open your X account 📱</li>
            <li>2. Find a video you love 🎤</li>
            <li>
              3. Tag{' '}
              <a
                href="https://twitter.com/@aview_bot"
                className="text-blue-500"
              >
                @aview_bot
              </a>{' '}
              🤖
            </li>
          </ul>
          <a
            href="/"
            className="text-blue-500 mt-4 underline"
            target="_blank"
            rel="noreferrer"
          >
            Click here for more information
          </a>
        </div>
      </main>
    </div>
  );
};

export default CollisionPage24;
