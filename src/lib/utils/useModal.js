import { useState } from 'react';

/**
 * Custom hook for managing modal state and actions.
 *
 * @returns {Object} An object containing modal-related state and functions.
 * @property {boolean} showModal - Indicates whether the modal is currently visible.
 * @property {string} activeModal - Represents the currently active modal.
 * @property {boolean} isLoading - Indicates whether a loading state is active.
 * @property {function} handleOpenModal - Function to open a modal with a specified value.
 * @property {function} handleCloseModal - Function to close the modal.
 * @property {function} toggleLoader - Function to toggle the loading state.
 */
const useModal = () => {
  // Initialize state variables
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Opens a modal with the specified value.
   *
   * @param {string} val - The value representing the modal to open.
   */
  const handleOpenModal = (val) => {
    // Set the active modal and show the modal
    setActiveModal(val);
    setShowModal(true);

    // If showModal was previously false, set isLoading to false
    if (!showModal) {
      setIsLoading(false);
    }
  };

  /**
   * Closes the currently open modal.
   */
  const handleCloseModal = () => {
    // Close the modal and reset the active modal
    setShowModal(false);
    setActiveModal('');
  };

  /**
   * Toggles the loading state.
   */
  const toggleLoader = () => {
    // Toggle isLoading from true to false and vice versa
    setIsLoading(!isLoading);
  };

  // Return an object with the state and functions
  return {
    showModal,
    activeModal,
    handleOpenModal,
    handleCloseModal,
    isLoading,
    toggleLoader,
  };
};

export default useModal;
