import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { StressTest } from '../../../modules/sortabledemos'


export default {
	title: "Modules|SortableDemos/StressTest",
	decorators: [withKnobs]
}

export const asStressTest = () => (
  <StressTest 
    numItems={10}
    title="Stress Test demo"
  />
)
