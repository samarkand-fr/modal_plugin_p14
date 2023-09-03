"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Adjust the import path as needed

describe('Modal component', function () {
  var mockClose = jest.fn();
  beforeEach(function () {
    mockClose.mockClear();
  });
  it('does not render modal content when isOpen is false', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: false,
      close: mockClose
    }, /*#__PURE__*/_react.default.createElement("p", null, "Modal Content")));
    var modalContent = _react2.screen.queryByText('Modal Content');
    expect(modalContent).not.toBeInTheDocument();
  });
  it('calls close function when close button is clicked', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      close: mockClose
    }, /*#__PURE__*/_react.default.createElement("p", null, "Modal Content")));
    var closeButton = _react2.screen.getByLabelText('Close');
    _react2.fireEvent.click(closeButton);
    expect(mockClose).toHaveBeenCalled();
  });
});