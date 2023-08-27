import React from 'react';
import Modal from './lib/components/Modal/Modal';

/**
 * ClassicModal component displaying a simple modal with a title.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @returns {JSX.Element} JSX element representing the classic modal.
 */
const ClassicModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} close={onClose}>
    <h2>Classic Modal</h2>
  </Modal>
);

export default ClassicModal;
