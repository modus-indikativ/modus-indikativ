import React from 'react'
import "./Typography.css"

function Typography (props) {
	const { variant = "primary", bold, children, ...rest}= props
	return(
		<div className={`typography ${variant} ${bold ? "bold" : ""}`} {...rest}>
			{children}
		</div>
	)
}

export default Typography
