"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Custom hook for managing modal state and actions.
 *
 * @returns {Object} An object containing modal-related state and functions.
 * @property {boolean} showModal - Indicates whether the modal is currently visible.
 * @property {string} activeModal - Represents the currently active modal.
 * @property {boolean} isLoading - Indicates whether a loading state is active.
 * @property {function} handleOpenModal - Function to open a modal with a specified value.
 * @property {function} handleCloseModal - Function to close the modal.
 * @property {function} toggleLoader - Function to toggle the loading state.
 */
var useModal = function useModal() {
  // Initialize state variables
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    activeModal = _useState4[0],
    setActiveModal = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];

  /**
   * Opens a modal with the specified value.
   *
   * @param {string} val - The value representing the modal to open.
   */
  var handleOpenModal = function handleOpenModal(val) {
    // Set the active modal and show the modal
    setActiveModal(val);
    setShowModal(true);

    // If showModal was previously false, set isLoading to false
    if (!showModal) {
      setIsLoading(false);
    }
  };

  /**
   * Closes the currently open modal.
   */
  var handleCloseModal = function handleCloseModal() {
    // Close the modal and reset the active modal
    setShowModal(false);
    setActiveModal('');
  };

  /**
   * Toggles the loading state.
   */
  var toggleLoader = function toggleLoader() {
    // Toggle isLoading from true to false and vice versa
    setIsLoading(!isLoading);
  };

  // Return an object with the state and functions
  return {
    showModal: showModal,
    activeModal: activeModal,
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
    isLoading: isLoading,
    toggleLoader: toggleLoader
  };
};
var _default = useModal;
exports.default = _default;