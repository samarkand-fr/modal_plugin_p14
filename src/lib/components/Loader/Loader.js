import PropTypes from 'prop-types';
import React from 'react';
import './Loader.css';

/**
 * Loader component to display a loading animation.
 * @param {Object} props - The component props.
 * @param {string} props.customClassName - Custom class name for styling.
 * @returns {JSX.Element} The Loader component.
 */
const Loader = (props) => {
    return (
        <div className={`modalOverlay ${props.customClassName ? 'modalOverlay-' + props.customClassName : ''}`}>
            <aside
                className={`modalWrapper ${props.customClassName ? 'modalWrapper-' + props.customClassName : ''}`}
                aria-modal
                aria-hidden
                tabIndex={-1}
                role='dialog'
            >
                <section className={`modal ${props.customClassName ? 'modal-' + props.customClassName : ''}`}>
                    <article className={`modalSection ${props.customClassName ? 'modalBody-' + props.customClassName : ''}`}>
                        {/* Loader animation */}
                        <div className={`loader ${props.customClassName ? 'loader-' + props.customClassName : ''}`} data-testid="loader"></div>
                    </article>
                </section>
            </aside>
        </div>
    );
}

// PropTypes validation
Loader.propTypes = {
    /**
     * Custom class name for styling.
     */
    customClassName: PropTypes.string,
};

export default Loader;
