import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Text, TextLead, TextLarge, TextMedium, TextSmall } from '../../../base/typography'

export default {
	title: "Base|Typography/Text",
	parameters: {
		component: Text,
	},
	decorators: [withKnobs]
}

export const asText = () => (
	<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
)

export const asTextLead = () => (
	<TextLead>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextLead>
)

export const asTextLarge = () => (
	<TextLarge>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextLarge>
)

export const asTextMedium = () => (
	<TextMedium>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextMedium>
)

export const asTextSmall = () => (
	<TextSmall>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextSmall>
)

// Knobs as dynamic variables.
export const asDynamicText = () => {
	const lorem = text("Text", "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
	return (
		<>
			<Text>{lorem}</Text>
			<TextLead>{lorem}</TextLead>
			<TextLarge>{lorem}</TextLarge>
			<TextMedium>{lorem}</TextMedium>
			<TextSmall>{lorem}</TextSmall>
		</>
	)
}