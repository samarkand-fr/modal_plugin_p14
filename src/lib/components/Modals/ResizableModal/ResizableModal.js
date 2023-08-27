import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from '../ModalHeader.js';
import ModalContent from '../ModalContent.js';
import ModalFooter from '../ModalFooter.js';

/**
 * ResizableModal component representing a modal with resizable dimensions.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Content to be displayed in the modal.
 * @param {boolean} props.addCloseIcon - Indicates whether to show a close icon.
 * @param {string} props.customClassName - Custom class name for the modal.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {number} props.initialWidth - Initial width of the modal.
 * @param {number} props.initialHeight - Initial height of the modal.
 * @param {number} props.minWidth - Minimum width constraint for resizing.
 * @param {number} props.minHeight - Minimum height constraint for resizing.
 * @param {number} props.maxWidth - Maximum width constraint for resizing.
 * @param {number} props.maxHeight - Maximum height constraint for resizing.
 * @returns {JSX.Element} JSX element representing the resizable modal.
 */
const ResizableModal = ({
  children,
  addCloseIcon,
  customClassName,
  onClose,
  initialWidth,
  initialHeight,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}) => {
  const [modalWidth, setModalWidth] = useState(initialWidth);
  const [modalHeight, setModalHeight] = useState(initialHeight);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;

    // Apply minimum and maximum width and height constraints
    const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX));
    const newHeight = Math.max(minHeight, Math.min(maxHeight, e.clientY));

    setModalWidth(newWidth);
    setModalHeight(newHeight);
  };

  return (
    <div
      className={`resizable-modal ${customClassName ? 'resizable-modal-' + customClassName : ''}`}
      style={{ width: modalWidth, height: modalHeight }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      data-testid="resizable-modal" 
    >
      <ModalHeader addCloseIcon={addCloseIcon} customClassName={customClassName} onClose={onClose} />
      <ModalContent customClassName={customClassName}>
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </ModalContent>
      <ModalFooter addFooterButton={false} customClassName={customClassName} onClose={onClose} />
      <div className="resizable-handle" onMouseDown={handleMouseDown} />
    </div>
  );
};

// PropTypes validation for component props
ResizableModal.propTypes = {
  children: PropTypes.node,
  addCloseIcon: PropTypes.bool,
  customClassName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  initialWidth: PropTypes.number,
  initialHeight: PropTypes.number,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

export default ResizableModal;
