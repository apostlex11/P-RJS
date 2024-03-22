import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className='flex justify-center'>
          <button className='bg-custom-color3 my-3 py-2 px-6 outline-none w-fit text-white font-bold shadow-md
             shadow-primary rounded-xl' onClick={onClose}>Close</button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
