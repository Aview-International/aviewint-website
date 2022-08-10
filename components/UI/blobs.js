import Image from 'next/image';
import blob1 from '../../public/img/blobs/blob-1.png'
import blob2 from '../../public/img/blobs/blob-2.png';
import blob3 from '../../public/img/blobs/blob-3.png';
import blob4 from '../../public/img/blobs/blob-4.png';

const Blobs = () => {
    return (
        <>
      <div className="-z-20 absolute w-1/2 -top-24 right-32">
        <Image src={blob2} alt="blob2" />
      </div>
      <div className="-z-20 absolute w-1/2 -bottom-80 -right-96">
        <Image src={blob2} alt="blob2" />
      </div>
      <div className="-z-10 absolute -top-72 -right-96">
        <Image src={blob1} alt="blob1" />
      </div>
        </>
    );
}

export default Blobs;