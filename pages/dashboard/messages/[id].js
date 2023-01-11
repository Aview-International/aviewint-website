import { MessagesLayout } from './';
import andrew from '../../../public/img/team/andrew.png';
import Image from 'next/image';
import WriteMessage from '../../../public/img/graphics/write-formatted-text.png';
import Arrow from '../../../public/img/icons/arrow-back.svg';
import { useRouter } from 'next/router';

const MessageDetails = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-full flex-col justify-between">
      <div className="flex items-center">
        <button
          className="block pr-s2 brightness-0 invert md:hidden"
          onClick={() => router.back()}
        >
          <Image src={Arrow} alt="" with={10} height={20} />
        </button>
        <div>
          <Image
            src={andrew}
            alt="Profile Picture"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <p className="ml-s1 text-2xl">Andrew Qiao</p>
      </div>
      <div className="">
        <div>
          <Message />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Message Andrew"
            className="w-full rounded-3xl bg-white-transparent p-s1"
          />
          {/* <Image src={WriteMessage} alt="" layout="fill" /> */}
        </div>
      </div>
    </div>
  );
};

MessageDetails.getLayout = MessagesLayout;
export default MessageDetails;

const Message = () => (
  <div className="my-s3 flex text-sm">
    <div>
      <Image src={andrew} alt="" width={40} height={40} />
    </div>
    <div>
      <p>
        Andrew Qiao <span className="pl-s2">3:27pm</span>
      </p>
      <p className="mt-s1">
        Hi Akshay! Would you like any additional languages translated?
      </p>
    </div>
  </div>
);
