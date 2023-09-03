"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Modal footer component.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.addFooterButton - Whether to add a footer button.
 * @param {string} props.customClassName - Custom CSS class name.
 * @param {function} props.onClose - Function to call when footer button is clicked.
 * @returns {JSX.Element} JSX element representing the modal footer.
 */
var ModalFooter = function ModalFooter(_ref) {
  var addFooterButton = _ref.addFooterButton,
    customClassName = _ref.customClassName,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "modalFooter ".concat(customClassName ? 'modalFooter-' + customClassName : '')
  }, addFooterButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "modalButton ".concat(customClassName ? 'modalButton-' + customClassName : ''),
    onClick: onClose
  }, "Close Modal"));
};
var _default = ModalFooter;
exports.default = _default;