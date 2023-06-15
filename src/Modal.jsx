import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModal, closeModal } = useGlobalContext();
  return (
    <div className="modal-overlay">
      <h3>modal content</h3>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  );
};
export default Modal;
