import React from 'react';

/**
 * Modal footer component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.addFooterButton - Whether to add a footer button.
 * @param {string} props.customClassName - Custom CSS class name.
 * @param {function} props.onClose - Function to call when footer button is clicked.
 * @returns {JSX.Element} JSX element representing the modal footer.
 */
const ModalFooter = ({ addFooterButton, customClassName, onClose }) => {
  return (
    <footer className={`modalFooter ${customClassName ? 'modalFooter-' + customClassName : ''}`}>
      {/* Render footer button if addFooterButton is true */}
      {addFooterButton && (
        <button
          className={`modalButton ${customClassName ? 'modalButton-' + customClassName : ''}`}
          onClick={onClose}
        >
          Close Modal
        </button>
      )}
    </footer>
  );
};

export default ModalFooter;
