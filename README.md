
# Modal Plugin

[![npm version](https://img.shields.io/npm/v/modal-plugin.svg)](https://www.npmjs.com/package/modal-plugin)

A flexible and customizable modal plugin for React applications.

## Installation

To use this modal plugin in your React application, you can install it via npm:

```bash
npm install @jadina/modal-plugin
## Usage

import the necessary components and use them in your React application:

import React, { useState } from 'react';
import { Modal, CustomScrollingModal, ScrollingButton, ResizableModal } from '@jadina/modal-plugin';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={showModal} close={closeModal}>
        {/* Your modal content */}
      </Modal>

      <CustomScrollingModal isOpen={showModal} onClose={closeModal}>
        {/* Your scrolling modal content */}
      </CustomScrollingModal>

      <ScrollingButton text="Open Scrolling Modal" onClick={openModal} />

      <ResizableModal onClose={closeModal}>
        {/* Your resizable modal content */}
      </ResizableModal>
    </div>
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