import React from 'react'
import {Button} from "./Button"

export default{
	title: "Button",
	component: Button,
	argTypes: {
		backgroundColor: {control:'color'},
	},
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
	type: "primary",
	label: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
	type: "secondary",
	label: "Secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
	type: "tertiary",
	label: "Tertiary"
}

export const Danger = Template.bind({});
Danger.args = {
	type: "danger",
	label: "Danger"
}