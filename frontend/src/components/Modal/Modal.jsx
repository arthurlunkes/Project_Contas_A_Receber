import React, { useState } from 'react'
import './Modal.css'

const ModalDefault = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <h1>Meu Modal</h1>
        <button onClick={openModal}>Abrir Modal</button>
  
        <ModalDefault isOpen={isModalOpen} onClose={closeModal}>
          <h2>Meu Modal</h2>
          <p>Conteúdo do modal...</p>
        </ModalDefault>
      </div>
    );
  };

export default Modal;