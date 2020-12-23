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
	theme: "primary",
	label: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
	theme: "secondary",
	label: "Secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
	theme: "tertiary",
	label: "Tertiary"
}

export const Danger = Template.bind({});
Danger.args = {
	theme: "danger",
	label: "Danger"
}