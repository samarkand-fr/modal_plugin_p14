"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
require("../../styles/Loader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Loader component to display a loading animation.
 * @param {Object} props - The component props.
 * @param {string} props.customClassName - Custom class name for styling.
 * @returns {JSX.Element} The Loader component.
 */
var Loader = function Loader(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalOverlay ".concat(props.customClassName ? 'modalOverlay-' + props.customClassName : '')
  }, /*#__PURE__*/_react.default.createElement("aside", {
    className: "modalWrapper ".concat(props.customClassName ? 'modalWrapper-' + props.customClassName : ''),
    "aria-modal": true,
    "aria-hidden": true,
    tabIndex: -1,
    role: "dialog"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "modal ".concat(props.customClassName ? 'modal-' + props.customClassName : '')
  }, /*#__PURE__*/_react.default.createElement("article", {
    className: "modalSection ".concat(props.customClassName ? 'modalBody-' + props.customClassName : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader ".concat(props.customClassName ? 'loader-' + props.customClassName : ''),
    "data-testid": "loader"
  })))));
};

// PropTypes validation
Loader.propTypes = {
  /**
   * Custom class name for styling.
   */
  customClassName: _propTypes.default.string
};
var _default = Loader;
exports.default = _default;