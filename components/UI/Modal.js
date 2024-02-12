import Image from 'next/image';
import Close from '../../public/img/icons/close.svg';
import OutsideClickHandler from 'react-outside-click-handler';

const Modal = ({ children, closeModal, preventOutsideClick }) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/80">
      <OutsideClickHandler
        onOutsideClick={preventOutsideClick ? () => null : closeModal}
      >
        <div className="gradient-dark mx-auto h-full w-full rounded-xl bg-black p-s3">
          <div className="mb-s3 text-right">
            <button
              onClick={closeModal}
              className="flex items-center ml-auto rounded-full p-2 hover:bg-white-transparent"
            >
              <Image src={Close} alt="" width={18} height={18} />
            </button>
          </div>
          {children}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
