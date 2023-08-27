import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import './Modal.css';

/**
 * Modal component for displaying overlay content.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.isOpen - Object containing `showModal` and `activeModal` boolean values.
 * @param {Function} props.close - Callback function to close the modal.
 * @param {React.ReactNode} props.children - Child components or elements to be displayed in the modal.
 * @param {boolean} props.addCloseEscape - Whether to close the modal on Escape key press.
 * @param {boolean} props.addCloseOverlay - Whether to close the modal on clicking outside overlay.
 * @param {boolean} props.addCloseIcon - Whether to show the close icon button.
 * @param {string} props.customClassName - Custom CSS class name for the modal.
 * @param {boolean} props.addFooterButton - Whether to add a footer button.
 * @param {boolean} props.loader - Whether to display the loader.
 * @param {boolean} props.darkTheme - Whether to use the dark theme for the modal.
 * @returns {JSX.Element|null} JSX element representing the modal or null.
 */
const Modal = ({
  isOpen = {
    showModal: false,
    activeModal: '',
  },
  close,
  children,
  addCloseEscape = false,
  addCloseOverlay = false,
  addCloseIcon = true,
  customClassName = '',
  addFooterButton = false,
  loader = false,
  darkTheme = false, 
}) => {
  const closeModal = useCallback(() => {
    if (isOpen) {
      close();
    }
  }, [isOpen, close]);

  const closeModalEvent = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (addCloseEscape) {
      window.addEventListener('keyup', closeModalEvent);
    }

    return () => {
      if (addCloseEscape) {
        window.removeEventListener('keyup', closeModalEvent);
      }
    };
  }, [addCloseEscape, closeModalEvent]);

  const renderCloseButton = addCloseIcon && (
    <button
      aria-label='Close'
      className={`modalCloseButton ${customClassName ? 'modalCloseButton-' + customClassName : ''}`}
      data-dismiss='modal'
      onClick={closeModal}
      type='button'
    >
      <i className="fas fa-times"></i>
    </button>
  );

  const renderFooterButton = addFooterButton && (
    <button
      className={`modalButton ${customClassName ? 'modalButton-' + customClassName : ''}`}
      onClick={closeModal}
    >
      Close Modal
    </button>
  );
   return isOpen ? ReactDOM.createPortal(
    <div 
      className={`modalOverlay ${customClassName ? 'modalOverlay-' + customClassName : ''}`} 
      onClick={addCloseOverlay ? closeModal : null}
      data-testid="modal-overlay" 
    >
      <aside 
        className={`modalWrapper ${customClassName ? 'modalWrapper-' + customClassName : ''} ${darkTheme ? 'dark-theme' : ''}`}
      >
        <section className={`modal ${customClassName ? 'modal-' + customClassName : ''}`} onClick={(e) => e.stopPropagation()}>
          <header className={`modalHeader ${customClassName ? 'modalHeader-' + customClassName : ''}`}>
            {renderCloseButton}
          </header>
          <section className={`modalSection ${customClassName ? 'modalSection-' + customClassName : ''}`}>
            {children}
          </section>
          <footer className={`modalFooter ${customClassName ? 'modalFooter-' + customClassName : ''}`}>
            {renderFooterButton}
          </footer>
        </section>
      </aside>
    </div>,
    document.body
  ) : loader ? ReactDOM.createPortal(
    <Loader customClassName={customClassName} />,
    document.body
  ) : null;
};

Modal.propTypes = {
  isOpen: PropTypes.shape({
    showModal: PropTypes.bool,
    activeModal: PropTypes.string,
  }),
  close: PropTypes.func.isRequired,
 
  addCloseEscape: PropTypes.bool,
  addCloseOverlay: PropTypes.bool,
  addCloseIcon: PropTypes.bool,
  customClassName: PropTypes.string,
  addFooterButton: PropTypes.bool,
  loader: PropTypes.bool,
};

export default Modal;