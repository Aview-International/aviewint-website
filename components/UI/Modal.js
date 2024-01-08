import Image from 'next/image';
import Close from '../../public/img/icons/close.svg';
import OutsideClickHandler from 'react-outside-click-handler';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/80">
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div className="gradient-dark h-full w-full mx-auto rounded-xl bg-black p-s3">
          <div className="mb-s3 text-right">
            <button onClick={closeModal}>
              <Image src={Close} alt="" width={25} height={25} />
            </button>
          </div>
          {children}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
