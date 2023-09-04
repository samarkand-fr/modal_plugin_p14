
# Modal Plugin

[![npm version](https://img.shields.io/npm/v/modal-plugin.svg)](https://www.npmjs.com/package/@jadina/modal-plugin)

A flexible and customizable modal plugin for React applications.

## Installation

You can install this modal plugin using npm or yarn:

```bash
npm install @jadina/modal-plugin
# or
yarn add @jadina/modal-plugin

## Usage
* import the necessary components and use them in your React application:
* Manual Setup: Users need  to include Font Awesome via a CDN:
  <link rel="stylesheet" href="path/to/fontawesome/css/all.min.css" />


 ### Basic Modal with Custom Content

import React from 'react';
import { Modal, useModal } from '@jadina/modal-plugin';
const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('customContent')}>
        Modal with Custom Content
      </button>
      <Modal isOpen={showModal && activeModal === 'customContent'} close={handleCloseModal} addCloseIcon={true}>
        <div className="custom-modal-content">
          <h2>Custom Content Modal</h2>
          <p>This modal contains custom content, such as images and text.</p>
          <img src="./modal-image.png" alt="" />
        </div>
      </Modal>
    </>
  );
};
export default App;


### Resizable Modal

import React, { useState } from 'react';
import { ResizableModal } from '@jadina/modal-plugin';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button type='button' className='buttonDefault' onClick={openModal}>Open Resizable Modal</button>
      {showModal && (
        <ResizableModal
          onClose={closeModal}
          initialWidth={400}
          initialHeight={300}
          minWidth={300}
          minHeight={200}
          maxWidth={800}
          maxHeight={600}
          addCloseIcon={true}
        >
          {/* Your resizable modal content */}
          <h2>Resizable Modal Content</h2>
          <p>This modal can be resized.</p>
        </ResizableModal>
      )}
    </>
  );
};
export default App;

### Modal with Footer Button

import React from 'react';
import { Modal, useModal } from '@jadina/modal-plugin';
const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <button type='button' className='buttonDefault' onClick={() => handleOpenModal('footerButton')}>
        Modal with footerButton
      </button>
      <Modal isOpen={showModal && activeModal === 'footerButton'} close={handleCloseModal} addFooterButton={true} addCloseIcon={false}>
        <h2>footerButton</h2>
      </Modal>
    </>
  );
};
export default App;

### Modal with Close Overlay

import React from 'react';
import {Modal, useModal } from '@jadina/modal-plugin';
const App = () => {
    const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
    return (
        <>
            <button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeOverlay')}>
                Modal with closeOverlay
            </button>
            <Modal isOpen={ showModal && activeModal === 'closeOverlay' } close={handleCloseModal} addCloseOverlay={true}>
                <h2>closeOverlay</h2>
            </Modal>
        </>
    );
};
export default App;

### Modal with Close Escape

import React from 'react';
import {Modal, useModal } from '@jadina/modal-plugin';
const App = () => {
    const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
    return (
        <>
            <button type='button' className='buttonDefault' onClick={() => handleOpenModal('closeEscape')}>
                Modal with closeEscape 
            </button>
            <Modal isOpen={ showModal && activeModal === 'closeEscape' } close={handleCloseModal} addCloseEscape={true}>
                <h2>closeEscape</h2>
            </Modal>
        </>
    );
};
export default App;

### Modal with Loader

import React from 'react';
import { Modal, useModal } from '@jadina/modal-plugin';
const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal, isLoading, toggleLoader } = useModal();
  const loaderTimer = () => {
    toggleLoader();
    setTimeout(() => {
      handleOpenModal('loader');
    }, 1000);
  };
  const closeModal = () => {
    handleCloseModal('loader');
  };
  return (
    <>
      <button type='button' className='buttonDefault' onClick={loaderTimer}>
        Modal with loader
      </button>
      <Modal isOpen={showModal && activeModal === 'loader'} close={closeModal} loader={isLoading} addCloseIcon={true}>
        <h2>loader</h2>
      </Modal>
    </>
  );
};
export default App;

### Modal with  ScrollingButton 

import React from 'react';
import { CustomScrollingModal, ScrollingButton, useModal } from '@jadina/modal-plugin';
const App = () => {
  const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
  const openScrollingModal = () => {
    handleOpenModal('scrolling-modal');
  };
  const closeScrollingModal = () => {
    handleCloseModal('scrolling-modal');
  };
  return (
    <>
      <ScrollingButton text="Open Scrolling Modal" onClick={openScrollingModal} />
      <CustomScrollingModal isOpen={showModal && activeModal === 'scrolling-modal'} onClose={closeScrollingModal}>
        <h2>Custom Scrolling Modal</h2>
        <p>This modal contains custom scrolling content.</p>
        <div className="scrollable-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </CustomScrollingModal>
    </>
  );
};
export default App;


## Features
Classic modal with customizable content and options.
Modal with custom scrolling content for long text.
Button that triggers a custom scrolling modal.
Resizable modal for flexible dimensions.

## Props
Each modal component accepts specific props. Refer to the documentation for detailed information on available props for each modal type.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
https://github.com/samarkand-fr/modal_plugin_p14#readme