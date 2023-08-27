import React from 'react';
import PropTypes from 'prop-types';

/**
 * ScrollingButton component representing a button for triggering actions.
 *
 * @param {Object} props - Component props.
 * @param {string} props.text - Text to display on the button.
 * @param {Function} props.onClick - Callback function to be executed on button click.
 * @returns {JSX.Element} JSX element representing the scrolling button.
 */
const ScrollingButton = ({ text, onClick }) => {
  return (
    <button type="button" className="buttonDefault" onClick={onClick}>
      {text}
    </button>
  );
};

// PropTypes validation for component props
ScrollingButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ScrollingButton;
