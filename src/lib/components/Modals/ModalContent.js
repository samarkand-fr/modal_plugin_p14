import React from 'react';

/**
 * Modal content section component.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components or elements.
 * @param {string} props.customClassName - Custom CSS class name.
 * @returns {JSX.Element} JSX element representing the modal content section.
 */
const ModalContent = ({ children, customClassName }) => {
  return (
    <section className={`modalSection ${customClassName ? 'modalSection-' + customClassName : ''}`}>
      {children}
    </section>
  );
};

export default ModalContent;
