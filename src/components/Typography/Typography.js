import React from 'react'
import "./Typography.css"
import PropTypes from "prop-types"

export const Typography = ({variant, bold, label, ...rest})=>{
	return(
		<div className={`typography ${variant} ${bold ? "bold" : ""}`} {...rest}>
			{label}
		</div>
	)
}

Typography.propTypes = {
	variant: PropTypes.oneOf([
		'metadata-01', 
		'metadata-02', 
		'body-short-01', 
		'body-short-02', 
		'body-long-01', 
		'body-long-02', 
		'heading-01', 
		'heading-02', 
		'heading-03', 
		'heading-04', 
		'heading-05', 
		'heading-06', 
		'heading-07', 
		'heading-08',
	]),
	bold: PropTypes.bool,
	label: PropTypes.string.isRequired
}

Typography.defaultProps = {
	variant: 'body-short-01',
	bold: false,
}
