"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * ScrollingButton component representing a button for triggering actions.
 *
 * @param {Object} props - Component props.
 * @param {string} props.text - Text to display on the button.
 * @param {Function} props.onClick - Callback function to be executed on button click.
 * @returns {JSX.Element} JSX element representing the scrolling button.
 */
var ScrollingButton = function ScrollingButton(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "buttonDefault",
    onClick: onClick
  }, text);
};

// PropTypes validation for component props
ScrollingButton.propTypes = {
  text: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = ScrollingButton;
exports.default = _default;