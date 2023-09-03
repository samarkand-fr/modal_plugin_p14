"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Modal = _interopRequireDefault(require("./lib/components/Modal/Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ClassicModal component displaying a simple modal with a title.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @returns {JSX.Element} JSX element representing the classic modal.
 */
var ClassicModal = function ClassicModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: isOpen,
    close: onClose
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Classic Modal"));
};
var _default = ClassicModal;
exports.default = _default;