import OutsideClickHandler from 'react-outside-click-handler';

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black/80">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <OutsideClickHandler onOutsideClick={closeModal}>
          {children}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Modal;
