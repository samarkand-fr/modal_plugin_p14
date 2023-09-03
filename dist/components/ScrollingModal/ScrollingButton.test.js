"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ScrollingButton = _interopRequireDefault(require("./ScrollingButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders scrolling button with correct text', function () {
  var buttonText = 'Click me';
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ScrollingButton.default, {
    text: buttonText,
    onClick: function onClick() {}
  }));
  var buttonElement = _react2.screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
test('calls onClick when button is clicked', function () {
  var mockOnClick = jest.fn();
  var buttonText = 'Click me';
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ScrollingButton.default, {
    text: buttonText,
    onClick: mockOnClick
  }));
  var buttonElement = _react2.screen.getByText(buttonText);
  _react2.fireEvent.click(buttonElement);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});