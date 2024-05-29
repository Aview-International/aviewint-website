import Image from 'next/image';
import { useContext } from 'react';
import blob3 from '../../public/img/blobs/blob-3.webp';
import blob4 from '../../public/img/blobs/blob-4.webp';
import MenuOpenContext from '../../store/menu-open-context';

const Blobs = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <>
      <div
        className={`top first_blob fixed -z-30 w-[70vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob3} alt="blob1" />
      </div>

      <div
        className={`bottom second_blob fixed -z-30 w-[60vw] ${
          menuOpenCtx.isMenuOpen && 'hidden'
        }`}
      >
        <Image src={blob4} alt="blob4" />
      </div>
    </>
  );
};

export default Blobs;
