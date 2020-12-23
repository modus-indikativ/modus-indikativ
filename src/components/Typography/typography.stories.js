import React from 'react'
import {Typography} from "./Typography"

export default{
	title: "Typography",
	component: Typography
}

const Template = (args) => <Typography {...args}/>

export const TextStyles = Template.bind({});
TextStyles.args = {
	variant: "body-short-01",
	label: "The quick brown fox jumps over the lazy dog"
}