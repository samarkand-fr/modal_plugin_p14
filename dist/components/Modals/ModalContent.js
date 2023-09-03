"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Modal content section component.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components or elements.
 * @param {string} props.customClassName - Custom CSS class name.
 * @returns {JSX.Element} JSX element representing the modal content section.
 */
var ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
    customClassName = _ref.customClassName;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "modalSection ".concat(customClassName ? 'modalSection-' + customClassName : '')
  }, children);
};
var _default = ModalContent;
exports.default = _default;