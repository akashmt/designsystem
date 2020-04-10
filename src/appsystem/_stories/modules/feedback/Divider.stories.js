import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Divider } from '../../../modules/feedback'


export default {
	title: "Modules|Feedback/Divider",
	parameters: {
		component: Divider,
	},
	decorators: [withKnobs]
}

export const asDivider = () => (
  <>
    <Divider />
    <Divider dashed />
    <Divider orientation="center">Text</Divider>
    <Divider orientation="left">Left Text</Divider>
    <Divider orientation="right">Right Text</Divider>
    <Divider type="vertical" />
  </>
)

