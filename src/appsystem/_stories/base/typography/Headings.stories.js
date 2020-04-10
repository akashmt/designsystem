import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { H1, H2, H3, H4, H5, H6 } from '../../../base/typography'

export default {
	title: "Base|Typography/Headings",
	parameters: {
		component: H1,
	},
	decorators: [withKnobs]
}

// const LoremHeading = 'Test'

export const asH1 = () => (
	<H1>Lorem text</H1>
)

export const asH2 = () => (
	<H2>Lorem text</H2>
)

export const asH3 = () => (
	<H3>Lorem text</H3>
)

export const asH4 = () => (
	<H4>Lorem text</H4>
)

export const asH5 = () => (
	<H5>Lorem text</H5>
)

export const asH6 = () => (
	<H6>Lorem text</H6>
)

export const asDynamicHeadings = () => {
	const lorem = text("Heading", "Lorem ipsum");
	return (
		<>
			<H1>{lorem}</H1>
			<H2>{lorem}</H2>
			<H3>{lorem}</H3>
			<H4>{lorem}</H4>
			<H5>{lorem}</H5>
			<H6>{lorem}</H6>
		</>
	)
}