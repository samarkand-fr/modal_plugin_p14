"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Modal header component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.addCloseIcon - Whether to add a close icon button.
 * @param {string} props.customClassName - Custom CSS class name.
 * @param {function} props.onClose - Function to call when close button is clicked.
 * @returns {JSX.Element} JSX element representing the modal header.
 */
var ModalHeader = function ModalHeader(_ref) {
  var addCloseIcon = _ref.addCloseIcon,
    customClassName = _ref.customClassName,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "modalHeader ".concat(customClassName ? 'modalHeader-' + customClassName : '')
  }, addCloseIcon && /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": "Close",
    className: "modalCloseButton ".concat(customClassName ? 'modalCloseButton-' + customClassName : ''),
    "data-dismiss": "modal",
    onClick: onClose,
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  })));
};
var _default = ModalHeader;
exports.default = _default;