import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Code } from '../../../datadisplay/code'

export default {
	title: "Data Display|Codes/Code",
	parameters: {
		component: Code,
	},
	decorators: [withKnobs]
}

export const asCode = () => (
	<Code>Here's a very long pre-formatted formatted using the &lt;pre&gt; tag.</Code>
)

