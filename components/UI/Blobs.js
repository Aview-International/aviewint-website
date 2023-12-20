import Image from 'next/image';
import { useContext } from 'react';
import blob1 from '../../public/img/blobs/blob-1.webp';
import blob2 from '../../public/img/blobs/blob-2.webp';
import blob3 from '../../public/img/blobs/blob-3.webp';
import blob4 from '../../public/img/blobs/blob-4.webp';
import MenuOpenContext from '../../store/menu-open-context';

const Blobs = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <>
      <div
        className={`absolute top-[0%] -left-[10%] -z-30 w-[70vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob1} alt="blob2" />
      </div>
      <div
        className={`absolute top-[20%] left-[55%] -z-30 w-[70vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob2} alt="blob2" />
      </div>
      <div
        className={`absolute top-[45%] -left-[20%] -z-30 w-[90vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob3} alt="blob3" />
      </div>
      <div
        className={`absolute top-[70%] left-[45%] -z-30 w-[80vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob4} alt="blob4" />
      </div>
      <div
        className={`absolute top-[88%] left-[30%] -z-30 w-[80vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob4} alt="blob4" />
      </div>
    </>
  );
};

export default Blobs;
