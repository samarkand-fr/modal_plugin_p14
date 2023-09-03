"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ModalHeader = _interopRequireDefault(require("../Modals/ModalHeader"));
var _ModalContent = _interopRequireDefault(require("../Modals/ModalContent.js"));
var _ModalFooter = _interopRequireDefault(require("../Modals/ModalFooter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var ResizableModal = function ResizableModal(_ref) {
  var children = _ref.children,
    addCloseIcon = _ref.addCloseIcon,
    customClassName = _ref.customClassName,
    onClose = _ref.onClose,
    initialWidth = _ref.initialWidth,
    initialHeight = _ref.initialHeight,
    minWidth = _ref.minWidth,
    minHeight = _ref.minHeight,
    maxWidth = _ref.maxWidth,
    maxHeight = _ref.maxHeight;
  var _useState = (0, _react.useState)(initialWidth),
    _useState2 = _slicedToArray(_useState, 2),
    modalWidth = _useState2[0],
    setModalWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(initialHeight),
    _useState4 = _slicedToArray(_useState3, 2),
    modalHeight = _useState4[0],
    setModalHeight = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isResizing = _useState6[0],
    setIsResizing = _useState6[1];
  var handleMouseDown = function handleMouseDown() {
    setIsResizing(true);
  };
  var handleMouseUp = function handleMouseUp() {
    setIsResizing(false);
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isResizing) return;

    // Apply minimum and maximum width and height constraints
    var newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX));
    var newHeight = Math.max(minHeight, Math.min(maxHeight, e.clientY));
    setModalWidth(newWidth);
    setModalHeight(newHeight);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "resizable-modal ".concat(customClassName ? 'resizable-modal-' + customClassName : ''),
    style: {
      width: modalWidth,
      height: modalHeight
    },
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    "data-testid": "resizable-modal"
  }, /*#__PURE__*/_react.default.createElement(_ModalHeader.default, {
    addCloseIcon: addCloseIcon,
    customClassName: customClassName,
    onClose: onClose
  }), /*#__PURE__*/_react.default.createElement(_ModalContent.default, {
    customClassName: customClassName
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "Close")), /*#__PURE__*/_react.default.createElement(_ModalFooter.default, {
    addFooterButton: false,
    customClassName: customClassName,
    onClose: onClose
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "resizable-handle",
    onMouseDown: handleMouseDown
  }));
};

// PropTypes validation for component props
ResizableModal.propTypes = {
  children: _propTypes.default.node,
  addCloseIcon: _propTypes.default.bool,
  customClassName: _propTypes.default.string,
  onClose: _propTypes.default.func.isRequired,
  initialWidth: _propTypes.default.number,
  initialHeight: _propTypes.default.number,
  minWidth: _propTypes.default.number,
  minHeight: _propTypes.default.number,
  maxWidth: _propTypes.default.number,
  maxHeight: _propTypes.default.number
};
var _default = ResizableModal;
exports.default = _default;