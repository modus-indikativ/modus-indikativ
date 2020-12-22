import React from 'react'
import "./button.css"
import PropTypes from "prop-types"

export const Button = ({ type, backgroundColor, rest, size, label, ...props }) => {
	const state = rest ? 'btn-rest' : 'btn-disabled';
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, `btn-${type}`, state].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
	rest: PropTypes.bool,
  backgroundColor: PropTypes.string,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
	rest: true,
  size: 'medium',
  onClick: undefined,
};