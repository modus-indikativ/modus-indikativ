import React from 'react'
import "./button.css"
import PropTypes from "prop-types"

export const Button = ({ theme, backgroundColor, size, state, label, ...props }) => {
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, `btn-${theme}-${state}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
  state: PropTypes.oneOf(['rest', 'hover', 'onclick', 'disabled']),
  backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  state: 'rest',
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};