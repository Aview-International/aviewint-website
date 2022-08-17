import Image from 'next/image';
import blob1 from '../../public/img/blobs/blob-1.png';
import blob2 from '../../public/img/blobs/blob-2.png';
import blob3 from '../../public/img/blobs/blob-3.png';
import blob4 from '../../public/img/blobs/blob-4.png';

const Blobs = () => {
  return (
    <>
      <div className="absolute -top-[5%] -right-[5%] -z-30 w-[70vw]">
        <Image src={blob1} alt="blob2" />
      </div>
      <div className="absolute top-[80vh] -left-[30vw] z-30 w-[70vw]">
        <Image src={blob2} alt="blob2" />
      </div>
      <div className="absolute top-[200vh] -right-[30vw] -z-30 w-[90vw]">
        <Image src={blob3} alt="blob3" />
      </div>
      <div className="absolute top-[250vh] -left-[10vw] -z-30 w-[80vw]">
        <Image src={blob4} alt="blob4" />
      </div>
    </>
  );
};

export default Blobs;
