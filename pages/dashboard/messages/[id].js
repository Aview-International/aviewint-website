import { MessagesLayout } from './';
import andrew from '../../../public/img/team/andrew.png';
import Image from 'next/image';
import WriteMessage from '../../../public/img/graphics/write-formatted-text.png';
import FormInput from '../../../components/FormComponents/FormInput';

const MessageDetails = () => {
  return (
    <div className="relative h-full">
      <div className="flex items-center">
        <Image
          src={andrew}
          alt="Profile Picture"
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="ml-s1 text-2xl">Andrew Qiao</p>
      </div>
      <div className="absolute bottom-3 w-full -translate-y-1/3">
        <div>
          <Message />
        </div>
        <div className="relative h-[130px] w-full">
          <FormInput />
          <Image src={WriteMessage} alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
};

MessageDetails.getLayout = MessagesLayout;
export default MessageDetails;

const Message = () => (
  <div className="my-s3 flex text-sm">
    <Image src={andrew} alt="" width={40} height={40} />
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
