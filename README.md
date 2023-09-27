  

# Modal Plugin
  
**A flexible and customizable modal plugin for React applications.**

[![npm version](https://img.shields.io/npm/v/modal-plugin.svg)](https://www.npmjs.com/package/@jadina/modal-plugin)
link to npm package : (https://www.npmjs.com/package/@jadina/modal-plugin)

## Installation

You can install this modal plugin using npm or yarn:
```bash
npm install  @jadina/modal-plugin
# or
yarn add  @jadina/modal-plugin
  ```
## Usage 


* import the necessary components and use them in your React application:


> [!NOTE] 
Manual Setup: Users need to include Font Awesome via a CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
```
  ----
  
  -------------------

$${\color{green}Basic \space Modal\space with\space  Custom\space  Content}$$
  -------
```js
import React  from  'react';
import {  Modal,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
  const {  showModal,  activeModal,  handleOpenModal,  handleCloseModal  }  =  useModal();
return (
<>
<button type='button'  className='buttonDefault' 
      onClick={() => handleOpenModal('customContent')}>
      Modal with  Custom  Content
</button>
<Modal 
      isOpen={showModal && activeModal ===  'customContent'}    close={handleCloseModal}  addCloseIcon={true}>
     <div className="custom-modal-content">
        <h2>Custom Content  Modal</h2>
        <p>This modal  contains  custom  content,  such  as  images  and  text.</p>
        <img src="./modal-image.png"  alt="" />
    </div>
</Modal>
</>
);
};
export  default  App;
  ```
  
----------

$${\color{green}Resizable \space Modal }$$
  -----
```js

import React,  {  useState  }  from  'react';
import {  ResizableModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const [showModal, setShowModal]  =  useState(false);
const openModal  = () => {
   setShowModal(true);
};
const closeModal  = () => {
  setShowModal(false);
};
return (
<>
  <button type='button'  className='buttonDefault'  
    onClick={openModal}>Open  Resizable  Modal</button>
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
   {/* Your  resizable  modal  content  */}
     <h2>Resizable Modal  Content</h2>
     <p>This modal  can  be  resized.</p>
  </ResizableModal>
)}
</>
);
};
export  default  App;
```
  -----------------
$${\color{green}Modal \space with\space Footer\space Button}$$

-------
```js
import React  from  'react';
import {  Modal,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const {  showModal,  activeModal,  handleOpenModal,  handleCloseModal  }  =  useModal();
return (
<>
  <button type='button'  className='buttonDefault'  
       onClick={() => handleOpenModal('footerButton')}>
       Modal with  footerButton
  </button>
  <Modal 
    isOpen={showModal && activeModal === 'footerButton'}    close={handleCloseModal}  addFooterButton={true}  
    addCloseIcon={false}>
    <h2>footerButton</h2>
  </Modal>
</>
);
};
export  default  App;
  ```
------------

$${\color{green}Modal \space with\space Close\space Overlay}$$
  ----
```js
import React  from  'react';
import {Modal,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const {  showModal,  activeModal,  handleOpenModal,   handleCloseModal  }  =  useModal();
return (
<>
  <button type='button'  className='buttonDefault'  
       onClick={() => handleOpenModal('closeOverlay')}>
        Modal with  closeOverlay
  </button>
  <Modal 
     isOpen={  showModal && activeModal ===  'closeOverlay'  }  close={handleCloseModal}  addCloseOverlay={true}>
      <h2>closeOverlay</h2>
  </Modal>
</>
);
};
export  default  App;
```
  ----------------
  
$${\color{green}Modal \space with\space Close\space Escape}$$
------
```js
import React  from  'react';
import {Modal,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const {  showModal,  activeModal,  handleOpenModal,  handleCloseModal  }  =  useModal();
return (
<>
   <button type='button'  className='buttonDefault'  
       onClick={() => handleOpenModal('closeEscape')}>
        Modal with  closeEscape
   </button>
   <Modal 
      isOpen={  showModal && activeModal ===  'closeEscape'  }  close={handleCloseModal}  addCloseEscape={true}>
      <h2>closeEscape</h2>
   </Modal>
</>
);
};

export  default  App;
```
  ----------
$${\color{green}Modal \space with\space Loader}$$

  ----
```js

import React  from  'react';
import {  Modal,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const {  showModal,  activeModal,  handleOpenModal,  handleCloseModal,  isLoading,  toggleLoader  }  =  useModal();
const loaderTimer  = () => {
    toggleLoader();
    setTimeout(() => {
    handleOpenModal('loader');
    }, 1000);
};
const closeModal  = () => {
    handleCloseModal('loader');
};
return (
<>
    <button type='button'  className='buttonDefault'  
      onClick= {loaderTimer}>
      Modal with  loader
    </button>
    <Modal 
       isOpen={showModal && activeModal ===  'loader'}  close={closeModal}  loader={isLoading}  addCloseIcon={true}>
       <h2>loader</h2>
    </Modal>
</>
);
};
export  default  App;

  ```
--------
$${\color{green}Modal \space with\space ScrollingButton}$$

  ----
```js
import React  from  'react';
import {  CustomScrollingModal,  ScrollingButton,  useModal  }  from  '@jadina/modal-plugin';

const App  = () => {
const {  showModal,  activeModal,  handleOpenModal,  handleCloseModal  }  =  useModal();
const openScrollingModal  = () => {
   handleOpenModal('scrolling-modal');
};
const closeScrollingModal  = () => {
   handleCloseModal('scrolling-modal');
};
return (
<>
  <ScrollingButton text="Open Scrolling Modal"  
    onClick= {openScrollingModal} />
  <CustomScrollingModal 
      isOpen={showModal && activeModal ===  'scrolling-modal'}  onClose={closeScrollingModal}>
     <h2>Custom Scrolling  Modal</h2>
     <p>This modal  contains  custom  scrolling  content.</p>
      <div className="scrollable-content">
       <p>
           Lorem ipsum  dolor  sit  amet,  consectetur  adipiscing  elit...
       </p>
      </div>
   </CustomScrollingModal>
</>
);
};
export  default  App;
```


## Features

Classic modal  with  customizable  content  and  options.

Modal with  custom  scrolling  content  for  long  text.

Button that  triggers  a  custom  scrolling  modal.

Resizable modal  for  flexible  dimensions.

  

## Props
 * isOpen - Boolean indicating if the modal is open
 * close - Callback function to close the modal.
 * children - Content to be displayed inside the modal
 * addCloseEscape - Whether to close the modal on Escape key press.
 * addCloseOverlay - Whether to close the modal on clicking outside overlay.
 * addCloseIcon - Whether to show the close icon button.
 * customClassName - Custom CSS class name for the modal.
 * addFooterButton - Whether to add a footer button.
 * loader - Whether to display the loader.
 * darkTheme - enable dark theme for the modal
Each modal  component  accepts  specific  props.  Refer  to  the  documentation  for  detailed  information  on  available  props  for  each  modal  type.

## Dependencies

- [react](https://www.npmjs.com/package/react): The core React library for building user interfaces.
- [react-dom](https://www.npmjs.com/package/react-dom): React's package for interacting with the DOM.
- [prop-types](https://www.npmjs.com/package/prop-types): A package used for defining and validating prop types.
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): Testing utilities for Jest.
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): Testing utilities for React applications.
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event): Testing utility for simulating user interactions.
- [web-vitals](https://www.npmjs.com/package/web-vitals): A library for measuring web performance metrics.
- [react-scripts](https://www.npmjs.com/package/react-scripts): Scripts and configurations for setting up a React project.

## License

This project  is  licensed  under  the  MIT  License  -  see  the  LICENSE  file  for  details.

https://github.com/samarkand-fr/modal_plugin_p14#readme