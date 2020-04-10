import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { HR } from '../../../base/dividers'

export default {
	title: "Base|dividers/hr",
	parameters: {
		component: HR,
	},
	decorators: [withKnobs]
}

export const asHr = () => (
	<HR />
)