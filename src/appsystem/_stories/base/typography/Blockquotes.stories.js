import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Blockquote } from '../../../base/typography'

export default {
	title: "Base|Typography/blockquotes",
	parameters: {
		component: Blockquote,
	},
	decorators: [withKnobs]
}

export const asBlockquotes = () => (
	<Blockquote>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</Blockquote>
)

