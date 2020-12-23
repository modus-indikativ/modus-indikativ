import React from 'react'
import "./button.css"
import PropTypes from "prop-types"
import {FiChevronDown} from "react-icons/fi"
import {BsFileText} from "react-icons/bs"

export const Button = ({ theme, backgroundColor, size, state, label, prepend, append, ...props }) => {
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, `btn-${theme}-${state}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {prepend===true ? <BsFileText className="btn-prepend"/> : ""}
      {label}
      {append===true ? <FiChevronDown className="btn-append"/> : ""}
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
  prepend: PropTypes.bool,
  append: PropTypes.bool,
};

Button.defaultProps = {
  state: 'rest',
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};