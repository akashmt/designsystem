import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Button } from '../../../actions/buttons'

export default {
	title: "Actions|Buttons/ButtonCancel",
	parameters: {
		component: Button,
	},
	decorators: [withKnobs]
}

export const asButton = () => (
	<Button
		onClick={action('click')}
		disabled={boolean('Disabled', true)}
	>Submit</Button>
)

export const hover = () => (
	<Button>Submit</Button>
)

export const focus = () => (
	<Button>Submit</Button>
)

export const isLoading = () => (
	<Button>Submit</Button>
)

// Knobs as dynamic variables.
export const asDynamicButton = () => {
	const label = text("Label", "Submit");
	return (
		<>
			<Button>{label}</Button>
		</>
	)
}