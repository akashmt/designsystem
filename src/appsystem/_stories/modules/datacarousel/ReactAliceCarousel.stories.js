import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { ReactAliceCarousel } from '../../../modules/datacarousel'


export default {
	title: "Modules|Carousel/ReactAliceCarousel",
	decorators: [withKnobs]
}

export const asReactAliceCarousel = () => (
  <ReactAliceCarousel />
)