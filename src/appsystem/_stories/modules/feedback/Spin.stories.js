import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Spin } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/SpinDemo",
	parameters: {
		component: Spin,
	},
	decorators: [withKnobs]
}

export const asSpin = () => (
  <>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </>
)

