import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/img/aview/Aviewlogo.png';
import img from '../../public/img/aview/collisionimg.png';

const CollisionPage24 = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <header className="absolute top-8 left-8">
    
        <Image src={logo} alt="Aview Logo" width={150} height={45} />
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center w-full px-11">
        <div className="md:w-1/2 flex justify-center">
          
          <Image src={img} alt="Aview Dashboard" width={600} height={400} />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-start md:items-start text-left md:text-left md:pl-8">
          <h1 className="text-7xl md:text-7xl font-bold">
            Dub your video for free with Aview
          </h1>
          <ul className="mt-4 space-y-2 text-lg text-left md:text-xl">
            <li>1. Open your X account 📱</li>
            <li>2. Find a video you love 🎤</li>
            <li>
              3. Tag <a href="https://twitter.com/aviewbot" className="text-blue-500">@aviewbot</a> 🤖
            </li>
          </ul>
          <Link href="/">
            <a className="mt-4 text-blue-500 underline">Click here for more information</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CollisionPage24;
