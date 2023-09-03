"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Loader = _interopRequireDefault(require("./Loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import screen query functions

test('Loader > renders without crashing', function () {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Loader.default, null));
});
test('Loader > renders with custom class name', function () {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Loader.default, {
    customClassName: "custom-loader"
  }));
  var loaderElement = _react2.screen.getByTestId('loader'); // Use screen.getByTestId
  expect(loaderElement).toBeInTheDocument();
});