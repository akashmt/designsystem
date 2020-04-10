import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { A } from '../../../actions/anchors'

export default {
	title: "Actions|Anchors/Anchor",
	parameters: {
		component: A,
	},
	decorators: [withKnobs]
}

export const asAnchor = () => (
	<A
		onClick={action('click')}
	>Link Text</A>
)