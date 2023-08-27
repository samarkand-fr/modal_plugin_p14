import React from 'react';

/**
 * Modal header component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.addCloseIcon - Whether to add a close icon button.
 * @param {string} props.customClassName - Custom CSS class name.
 * @param {function} props.onClose - Function to call when close button is clicked.
 * @returns {JSX.Element} JSX element representing the modal header.
 */
const ModalHeader = ({ addCloseIcon, customClassName, onClose }) => {
  return (
    <header className={`modalHeader ${customClassName ? 'modalHeader-' + customClassName : ''}`}>
      {/* Render close icon button if addCloseIcon is true */}
      {addCloseIcon && (
        <button
          aria-label='Close'
          className={`modalCloseButton ${customClassName ? 'modalCloseButton-' + customClassName : ''}`}
          data-dismiss='modal'
          onClick={onClose}
          type='button'
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </header>
  );
};

export default ModalHeader;
