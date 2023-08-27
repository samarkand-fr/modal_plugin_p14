
import Modal from './lib/components/Modals/Modal';
import useModal from './lib/utils/useModal';
import ResizableModal from './lib/components/Modals/ResizableModal/ResizableModal'
import CustomScrollingModal from './lib/components/Modals/ScrollingModal/CustomScrollingModal'
import ScrollingButton from './lib/components/Modals/ScrollingModal/ScrollingButton'

const App = () => {
  // Destructure values from the useModal hook
  const { showModal, activeModal, handleOpenModal, handleCloseModal, isLoading, toggleLoader } = useModal();

  // Function to trigger loader and then open a modal after a delay
  const loaderTimer = () => {
    toggleLoader();

    setTimeout(() => {
      handleOpenModal('loader');
    }, 1000);
  };

  return (
    <main>
      {/* Button to open classic Modal */}
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('classic')}>classic Modal</button>
      <Modal isOpen={ showModal && activeModal === 'classic' } close={handleCloseModal}>
        <h2>classic</h2>
      </Modal>

      {/* Button to open Modal with closeEscape */}
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeEscape')}>Modal with closeEscape</button>
      <Modal isOpen={ showModal && activeModal === 'closeEscape' } close={handleCloseModal} addCloseEscape={true}>
        <h2>closeEscape</h2>
      </Modal>

      {/* Button to open Modal with closeOverlay */}
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeOverlay')}>Modal with closeOverlay</button>
      <Modal isOpen={ showModal && activeModal === 'closeOverlay' } close={handleCloseModal} addCloseOverlay={true}>
        <h2>closeOverlay</h2>
      </Modal>

      {/* Button to open Modal with footerButton */}
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('footerButton')}>Modal with footerButton</button>
      <Modal isOpen={ showModal && activeModal === 'footerButton' } close={handleCloseModal} addFooterButton={true} addCloseIcon={false}>
        <h2>footerButton</h2>
      </Modal>

      {/* Button to open Modal with customClassName */}
       <button type='button' className='buttonDefault' onClick={() => handleOpenModal('customClassName')}> Modal with customClassName</button>
      <Modal isOpen={ showModal && activeModal === 'customClassName' } close={handleCloseModal} customClassName='custom'>
        <h2>customClassName</h2>
      </Modal> 

      {/* Button to open Modal with loader */}
      <button type='button' className='buttonDefault' onClick={loaderTimer}>Modal with loader</button>
      <Modal isOpen={ showModal && activeModal === 'loader' } close={handleCloseModal} loader={isLoading}>
        <h2>loader</h2>
      </Modal>

      {/* Button to open Modal with custom content */}
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal('customContent')}>
        Modal with Custom Content
      </button>
      <Modal isOpen={showModal && activeModal === 'customContent'} close={handleCloseModal} addCloseIcon={true}>
          <div className="custom-modal-content">
            <h2>Custom Content Modal</h2>
            <p>This modal contains custom content, such as images and text.</p>
            <img src="./modal-image.png" alt="" />
          </div>
      </Modal>
      
       {/* Button to open Modal with dark theme */}
      <button type="button" className="buttonDefault" onClick={() => handleOpenModal('darkTheme')}>
         Modal with Dark Theme
      </button>
      <Modal isOpen={showModal && activeModal === 'darkTheme'} close={handleCloseModal} darkTheme={true}>
           <h2>Dark Theme Modal</h2>
           <p>This is a modal with a dark theme.</p>
      </Modal>

       {/* Button to open Custom Scrolling Content Modal */}
      <CustomScrollingModal isOpen={showModal && activeModal === 'customScrollingContent'} onClose={handleCloseModal} />
      <ScrollingButton
        text="Modal with Custom Scrolling Content"
        onClick={() => handleOpenModal('customScrollingContent')}
      />

     {/* Button to open Resizable Modal */}
      <button
          className='buttonDefault'
          onClick={() => handleOpenModal('resizableModal')}
      >
          Open Resizable Modal
      </button>
        {activeModal === 'resizableModal' && (
          <ResizableModal
            onClose={handleCloseModal}
            initialWidth={400}
            initialHeight={300}
            minWidth={200}
            minHeight={150}
            maxWidth={800}
            maxHeight={600}
          >
            <h2>Resizable Modal Content</h2>
            <p>try to resize the  modal</p>
           
        </ResizableModal>
        )}
    </main>
  );
};

export default App;