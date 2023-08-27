import React from 'react';
import Modal from '../Modals/Modal';

/**
 * CustomScrollingModal component displaying a modal with custom scrolling content.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @returns {JSX.Element} JSX element representing the custom scrolling modal.
 */
const CustomScrollingModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} 
         close={onClose} 
         addCloseIcon={true}
         data-testid="custom-scrolling-modal" >
    <div className="custom-modal-content">
      <h2>Custom Scrolling Content Modal</h2>
      <p>
        This modal contains custom content that will scroll if it exceeds the
        available height.
      </p>
      {/* Add your long content here */}
      <div className="scrollable-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan est et mi facilisis, quis feugiat mi lacinia. Aenean at
          feugiat felis. Nulla sed orci quis neque facilisis feugiat vel sed
          odio. Fusce tincidunt velit dui, nec auctor justo feugiat sed.
          Pellentesque quis arcu id ante tincidunt placerat. Vivamus rhoncus,
          dolor at tincidunt aliquet, mi libero fermentum augue, sit amet
          gravida metus quam ut nunc.
        </p>
      </div>
    </div>
  </Modal>
);

export default CustomScrollingModal;
