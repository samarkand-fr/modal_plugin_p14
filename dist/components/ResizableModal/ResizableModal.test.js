"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ResizableModal = _interopRequireDefault(require("./ResizableModal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = {
  onClose: jest.fn(),
  initialWidth: 400,
  initialHeight: 300,
  minWidth: 200,
  minHeight: 150,
  maxWidth: 800,
  maxHeight: 600
};
it('renders correctly', function () {
  (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ResizableModal.default, defaultProps, "Content"));
  var resizableModal = _react2.screen.getByTestId('resizable-modal');
  expect(resizableModal).toBeInTheDocument();
});