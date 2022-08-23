import Image from 'next/image';
import { useContext } from 'react';
import blob1 from '../../public/img/blobs/blob-1.png';
import blob2 from '../../public/img/blobs/blob-2.png';
import blob3 from '../../public/img/blobs/blob-3.png';
import blob4 from '../../public/img/blobs/blob-4.png';
import MenuOpenContext from '../../store/menu-open-context';

const Blobs = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <>
      <div
        className={`absolute -top-[5%] -right-[5%] -z-30 w-[70vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob1} alt="blob2" />
      </div>
      <div
        className={`absolute top-[80vh] -left-[30vw] -z-30 w-[70vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob2} alt="blob2" />
      </div>
      <div
        className={`absolute top-[200vh] -right-[30vw] -z-30 w-[90vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob3} alt="blob3" />
      </div>
      <div
        className={`absolute top-[250vh] -left-[10vw] -z-30 w-[80vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob4} alt="blob4" />
      </div>
    </>
  );
};

export default Blobs;
