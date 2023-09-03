"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Modal = _interopRequireDefault(require("../Modals/Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * CustomScrollingModal component displaying a modal with custom scrolling content.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @returns {JSX.Element} JSX element representing the custom scrolling modal.
 */
var CustomScrollingModal = function CustomScrollingModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    isOpen: isOpen,
    close: onClose,
    addCloseIcon: true,
    "data-testid": "custom-scrolling-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-modal-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Custom Scrolling Content Modal"), /*#__PURE__*/_react.default.createElement("p", null, "This modal contains custom content that will scroll if it exceeds the available height."), /*#__PURE__*/_react.default.createElement("div", {
    className: "scrollable-content"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan est et mi facilisis, quis feugiat mi lacinia. Aenean at feugiat felis. Nulla sed orci quis neque facilisis feugiat vel sed odio. Fusce tincidunt velit dui, nec auctor justo feugiat sed. Pellentesque quis arcu id ante tincidunt placerat. Vivamus rhoncus, dolor at tincidunt aliquet, mi libero fermentum augue, sit amet gravida metus quam ut nunc."))));
};
var _default = CustomScrollingModal;
exports.default = _default;