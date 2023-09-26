"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Loader = _interopRequireDefault(require("../Loader/Loader"));
require("../../styles/Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Import necessary dependencies and styles

/**
 * Modal component for displaying overlay content.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Boolean indicating if the modal is open
 * @param {Function} props.close - Callback function to close the modal.
 * @param {React.ReactNode} props.children - Content to be displayed inside the modal
 * @param {boolean} props.addCloseEscape - Whether to close the modal on Escape key press.
 * @param {boolean} props.addCloseOverlay - Whether to close the modal on clicking outside overlay.
 * @param {boolean} props.addCloseIcon - Whether to show the close icon button.
 * @param {string} props.customClassName - Custom CSS class name for the modal.
 * @param {boolean} props.addFooterButton - Whether to add a footer button.
 * @param {boolean} props.loader - Whether to display the loader.
 * @param {boolean} props.darkTheme - enable dark theme for the modal
 * @returns {JSX.Element|null} JSX element representing the modal or null.
 */ // Define the Modal component
var Modal = function Modal(_ref) {
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    close = _ref.close,
    children = _ref.children,
    _ref$addCloseEscape = _ref.addCloseEscape,
    addCloseEscape = _ref$addCloseEscape === void 0 ? false : _ref$addCloseEscape,
    _ref$addCloseOverlay = _ref.addCloseOverlay,
    addCloseOverlay = _ref$addCloseOverlay === void 0 ? false : _ref$addCloseOverlay,
    _ref$addCloseIcon = _ref.addCloseIcon,
    addCloseIcon = _ref$addCloseIcon === void 0 ? true : _ref$addCloseIcon,
    _ref$customClassName = _ref.customClassName,
    customClassName = _ref$customClassName === void 0 ? '' : _ref$customClassName,
    _ref$addFooterButton = _ref.addFooterButton,
    addFooterButton = _ref$addFooterButton === void 0 ? false : _ref$addFooterButton,
    _ref$loader = _ref.loader,
    loader = _ref$loader === void 0 ? false : _ref$loader,
    _ref$darkTheme = _ref.darkTheme,
    darkTheme = _ref$darkTheme === void 0 ? false : _ref$darkTheme;
  // Callback function to close the modal
  var closeModal = (0, _react.useCallback)(function () {
    close();
  }, [close]);

  // Event handler for closing the modal on Escape key press
  var closeModalEvent = (0, _react.useCallback)(function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  // Add or remove event listener for Escape key press based on the prop
  (0, _react.useEffect)(function () {
    if (addCloseEscape) {
      window.addEventListener('keyup', closeModalEvent);
    }
    return function () {
      if (addCloseEscape) {
        window.removeEventListener('keyup', closeModalEvent);
      }
    };
  }, [addCloseEscape, closeModalEvent]);

  // Render the close button if addCloseIcon is true
  var renderCloseButton = addCloseIcon && /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Close",
    className: "modalCloseButton ".concat(customClassName ? 'modalCloseButton-' + customClassName : ''),
    "data-dismiss": "modal",
    onClick: closeModal,
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  }));

  // Render the footer button if addFooterButton is true
  var renderFooterButton = addFooterButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "modalButton ".concat(customClassName ? 'modalButton-' + customClassName : ''),
    onClick: closeModal
  }, "Close Modal");

  // Render the modal content using ReactDOM.createPortal
  return isOpen ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "modalOverlay ".concat(customClassName ? 'modalOverlay-' + customClassName : ''),
    onClick: addCloseOverlay ? closeModal : null,
    "data-testid": "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("aside", {
    className: "modalWrapper ".concat(customClassName ? 'modalWrapper-' + customClassName : '', " ").concat(darkTheme ? 'dark-theme' : '')
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "modal ".concat(customClassName ? 'modal-' + customClassName : ''),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "modalHeader ".concat(customClassName ? 'modalHeader-' + customClassName : '')
  }, renderCloseButton), /*#__PURE__*/_react.default.createElement("section", {
    className: "modalSection ".concat(customClassName ? 'modalSection-' + customClassName : '')
  }, children), /*#__PURE__*/_react.default.createElement("footer", {
    className: "modalFooter ".concat(customClassName ? 'modalFooter-' + customClassName : '')
  }, renderFooterButton)))), document.body) : loader ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_Loader.default, {
    customClassName: customClassName
  }), document.body) : null;
};

// Define prop types for the Modal component
Modal.propTypes = {
  isOpen: _propTypes.default.bool,
  close: _propTypes.default.func.isRequired,
  addCloseEscape: _propTypes.default.bool,
  addCloseOverlay: _propTypes.default.bool,
  addCloseIcon: _propTypes.default.bool,
  customClassName: _propTypes.default.string,
  addFooterButton: _propTypes.default.bool,
  loader: _propTypes.default.bool,
  darkTheme: _propTypes.default.bool
};

// Export the Modal component
var _default = Modal;
exports.default = _default;